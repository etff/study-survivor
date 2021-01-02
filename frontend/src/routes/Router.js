import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import MyComponent from "../components/MyComponent";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Link to="/main">Main</Link>

      <Link to="/dashboard">Dashboard</Link>

      <Route path="/main" exact component={MyComponent} />
      <Route path="/dashboard" exact component={Dashboard} />
    </BrowserRouter>
  );
};

export default MyRouter;
