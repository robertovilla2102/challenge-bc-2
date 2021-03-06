import React, { VFC } from "react";
import { Space, Spin } from "antd";

const Loading: VFC = () => {
  return (
    <Space size="large" style={styles}>
      <Spin size="large" tip="Cargando..." />
    </Space>
  );
};

const styles = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
};

export default Loading;
