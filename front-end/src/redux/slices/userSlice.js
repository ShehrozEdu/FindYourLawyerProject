import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//register action

export const registerUserAction = createAsyncThunk(
  "users/signup",
  async (user, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      //http call
      const { data } = await axios.post(
        "http://localhost:5000/api/users/signup",
        user,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Lawyer Signup

export const registerLawyerAction = createAsyncThunk(
  "lawyer/signup",
  async (lawyer, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      //http call
      const { data } = await axios.post(
        "http://localhost:5000/api/users/lawyer-signup",
        lawyer,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//login action
export const loginUserAction = createAsyncThunk(
  "users/login",
  async (userData, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      //http call
      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        userData,
        config
      );

      //user save in Local
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//get user= storage to store

const userLoginFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

//LOGOUT
export const logoutAction = createAsyncThunk(
  "/user /logout",
  async (payload, { rejectWithValue, getState, getDispatch }) => {
    try {
      localStorage.removeItem("userInfo");
    } catch (error) {
      if (!error?.response) {
        throw error;
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);
//Slices
const userSlices = createSlice({
  name: " user",
  initialState: {
    userAuth: userLoginFromStorage,
  },

  extraReducers: (builder) => {
    //For Registration

    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.registered = action?.payload?.message;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //For Lawyer Registration

    builder.addCase(registerLawyerAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(registerLawyerAction.fulfilled, (state, action) => {
      state.loading = false;
      state.registered = action?.payload?.message;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(registerLawyerAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //for Login

    builder.addCase(loginUserAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.userAuth = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //for Logout

    builder.addCase(logoutAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logoutAction.fulfilled, (state, action) => {
      state.userAuth = undefined;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(logoutAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});
export default userSlices.reducer;