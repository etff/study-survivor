import React from "react";
import { Footer } from "antd/lib/layout/layout";

const Bottom = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <Footer style={{ textAlign: "center" }}>
      Copyright &copy; <span>{thisYear()}</span>
    </Footer>
  );
};

export default Bottom;
