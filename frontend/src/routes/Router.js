import React, { Fragment } from "react";
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import Bottom from "../components/Bottom";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Login from "../components/Login";

const MyRouter = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
        <Bottom />
      </Layout>
    </>
  );
};

export default MyRouter;
