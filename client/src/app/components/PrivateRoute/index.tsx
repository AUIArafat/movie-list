import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

import jwtDecode, { JwtPayload } from "jwt-decode";
import { auth } from "../../../utils/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const token = auth.getToken();
      if (token !== null) {
        const { exp }: JwtPayload = jwtDecode(token);
        if (exp && Date.now() >= exp * 1000) {
          auth.logout();
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        }
        return <Component {...props} />;
      } else {
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any,
};

export default PrivateRoute;
