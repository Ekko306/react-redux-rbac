import React from "react";

const NoAccess = ({ permissionsNeeded }) => {
  return (
    <div className="container">
      <h3 className="no-access-text">
      没有权限 -- 你需要如下权限{" "}
      </h3>
      <span className="permission-text">{permissionsNeeded}</span>
    </div>
  );
};

export default NoAccess;