import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//Screens
import HomeScreen from "./Screens/HomeScreen";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Bookings from "./components/Bookings";
import Books from "./components/Books";
// import Blog from "./components/Blog/Blog";
import LawyerSignup from "./components/LawyerSignup";
import Navbar from "./Screens/Navbar/Navbar";
import AddNewCategory from "./components/Categories/AddNewCategory";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<HomeScreen />} />
          <Route path={"/signin"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/signup/lawyer"} element={<LawyerSignup />} />
          <Route path={"/bookings"} element={<Bookings />} />
          <Route path={"/books"} element={<Books />} />
          <Route path={"/bookyourlawyer"} element={<AddNewCategory />} />
          {/* <Route path={"/blogs"} element={<Blog />} /> */}
         
        </Routes>
      </>
    </Router>
  );
}

export default App;