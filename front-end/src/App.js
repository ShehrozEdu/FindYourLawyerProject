import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//Screens
import HomeScreen from "./components/Home/HomeScreen";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Bookings from "./components/Bookings";
import Books from "./components/Books";
import Navbar from "./Screens/Navbar/Navbar";
import AddNewCategory from "./components/Categories/AddNewCategory";
// import MyBookings from "./components/MyBookings";
import LawyerRoute from "./Screens/Navbar/ProtectedRoutes/LawyerRoute";
import CreatePost from "./components/BlogCRUD/CreatePost";
import IPC from "./components/IPCs and CRPCs/IPC";
import LawyersList from "./components/Lawyers/LawyersList";
import Article from "./components/BlogCRUD/Article/Article";
import Blog from "./components/BlogCRUD/Article/Blog";
import Error from "./components/Error";
import Pricing from "./components/Categories/Pricing";
import PracticeOverview from "./components/Lawyers/PracticeOverview";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<HomeScreen />} />
          <Route path={"/signin"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          {/* <Route path={"/signup/lawyer"} element={<LawyerSignup />} /> */}
          <Route path={"/bookings"} element={<Bookings />} />
          <Route path={"/books"} element={<Books />} />
          <Route path={"/bookyourlawyer"} element={<AddNewCategory />} />
          {/* <Route path={"/mybookings"} element={}/> */}
          {/* <Route path={"/mybookings"} element={<MyBookings />} /> */}

          <Route path={"/posts"} element={<CreatePost />} />
          <Route path={"/services/ipc&crpcs"} element={<IPC />} />
          <Route path={"/lawyersList"} element={<LawyersList />} />
          {/* //blogs */}
          <Route path={"/blogs"} element={<Blog />} />
          <Route path={"/article/:name"} element={<Article />} />
          <Route
            path={"/lawyerListOverview/:id"}
            element={<PracticeOverview />}
          />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
