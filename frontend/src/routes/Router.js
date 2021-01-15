import React, { Fragment } from "react";
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import Bottom from "../components/Bottom";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Study from "../components/Study";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Content } from "antd/lib/layout/layout";

const MyRouter = () => {
  return (
    <>
      <Router>
        <Layout>
          <NavBar />
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Content style={{ padding: "0 50px" }}>
              <Route path="/" exact component={Main} />
              <Route path="/main" exact component={Main} />
              <Route path="/study" exact component={Study} />
              <Redirect from="*" to="/" />
            </Content>
          </Layout>
          <Bottom />
        </Layout>
      </Router>
    </>
  );
};

export default MyRouter;
