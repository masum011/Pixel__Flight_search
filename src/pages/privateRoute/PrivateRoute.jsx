import React from "react";
import { Navigate } from "react-router-dom";
 const PrivateRoute=(props)=> {
  const { isPrivate,children } = props;
  const token = localStorage.getItem("token");
  return !token && isPrivate === false ? (
    <Navigate to="/login" />
  ) :  <main>{children}</main>;
}

export default PrivateRoute;