import React, { Fragment } from "react";
import { Layout } from "antd";
import Bottom from "../components/Bottom";
import NavBar from "../components/NavBar";
import Main from "../components/Main";

const MyRouter = () => {
  return (
    <>
      <Layout>
        <NavBar />

        <Main />

        <Bottom />
      </Layout>
    </>
  );
};

export default MyRouter;
