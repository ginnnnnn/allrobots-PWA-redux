import React from "react";

const Scroll = props => {
  return (
    <div
      style={{ overflow: "scroll", height: "600px" }}
      className="ba bw2 b--orange br3"
    >
      {props.children}
    </div>
  );
};
export default Scroll;
