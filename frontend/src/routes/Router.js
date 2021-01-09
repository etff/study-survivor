import React, { Fragment } from "react";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Bottom from "../components/Bottom";

const MyRouter = () => {
  return (
    <>
      <Layout>
        <Header />
        <Content>
          <h1>Hello Body</h1>
        </Content>
        <Bottom />
      </Layout>
    </>
  );
};

export default MyRouter;
