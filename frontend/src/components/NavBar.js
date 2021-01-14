import React from "react";
import { Header } from "antd/lib/layout/layout";
import { Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Header className="header">
      <Row>
        <Col span={20}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/">nav 1</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/nav2">nav 1</Link>
            </Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Col>
        <Col span={4}>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="login">
              <Link to="/login">login</Link>
            </Menu.Item>
            <Menu.Item key="myinfo">
              <Link to="/myinfo">myinfo</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default NavBar;
