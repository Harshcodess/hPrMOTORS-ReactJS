import React from "react";

const Helmet = (props) => {
  document.title = "hPR MOTORS";
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
