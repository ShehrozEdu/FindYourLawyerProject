import React from "react";
import LogoutNavBar from "./LogoutNav/Navbar";
import NewUserNavBar from "./NewUser/Navbar";
import LawyerNavbar from "./Lawyer/Navbar";

// import SetDarkMode from "../../hooks/setDarkMode";

export default function Navbar() {
  // const state = useSelector((state) => state.users);
  // console.log(state);
  // const { userAuth } = state;
  // const isLawyer = userAuth?.result?.isLawyer;

  // console.log(isLawyer);
  return (
    <>
      {/* {isLawyer ? (
        <LawyerNavbar />
      ) : userAuth ? (
        <LogoutNavBar />
      ) : ( */}
      <NewUserNavBar />
      {/* )} */}
    </>
  );
}
