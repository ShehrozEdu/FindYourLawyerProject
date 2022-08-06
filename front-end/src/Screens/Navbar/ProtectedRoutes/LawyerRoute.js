import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LawyerRoute() {
  const user = useSelector((state) => state?.users);
  const { userAuth } = user;

  return userAuth?.isLawyer ? <Outlet /> : <Navigate to="/signin" />;
}
