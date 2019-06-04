import React from "react";

const Scroll = props => {
  console.log('scroll')
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
