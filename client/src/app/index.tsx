import React from "react";
import "antd/dist/antd.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./modules/LoginModules";
import { GlobalStyle } from "../global";
import PrivateRoute from "./components/PrivateRoute";
import Movies from "./modules/MoviesModule";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute component={Movies} path="/movies" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
