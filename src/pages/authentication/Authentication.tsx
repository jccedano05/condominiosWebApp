import React from "react";

import "./Authentication.css";

type Props = {
  children: JSX.Element;
};

export const Authentication = (props: Props) => {
  const { children } = props;
  return (
    <div className="auth-multi-layout">
      <div className="auth-box">{children}</div>
    </div>
  );
};
