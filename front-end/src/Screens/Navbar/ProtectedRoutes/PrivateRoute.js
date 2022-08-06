import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";
export default function PrivateRoute({ component: Component, ...rest }) {
  const user = useSelector((state) => state?.users);
  const { userAuth } = user;
  return (
    <Route
      {...rest}
      render={() =>
        userAuth ? <Component {...rest} /> : <Navigate to="/login" />
      }
    />
  );
}
