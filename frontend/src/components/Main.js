import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Content, Sider } from "antd/lib/layout/layout";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Main = () => {
  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>

      <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>Content</Content>
      </Layout>
    </Content>
  );
};

export default Main;
