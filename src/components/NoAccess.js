import React from "react";

const NoAccess = ({ permissionsNeeded }) => {
  return (
    <div className="container">
      <h3 className="no-access-text">
      Unauthorized -- You need the following permissions:{" "}
      </h3>
      <span className="permission-text">{permissionsNeeded}</span>
    </div>
  );
};

export default NoAccess;