import React from "react";
import { Header } from "antd/lib/layout/layout";
import { Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Header>
      <div className="logo" />
      <Row>
        <Col span={20}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/main">nav 1 </Link>
            </Menu.Item>
            <Menu.Item key="2">
              {" "}
              <Link to="/study">STUDY</Link>
            </Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Col>
        <Col span={4}>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/login">LOGIN</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/myinfo">MY INFO </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default NavBar;
