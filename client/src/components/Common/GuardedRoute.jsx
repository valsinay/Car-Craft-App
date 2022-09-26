import React, { Children } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const GuardedRoute = () => {
  const { isLogged } = AuthContext();

  return isLogged ? Children : <Redirect to="/login" />;
};

export default GuardedRoute;
