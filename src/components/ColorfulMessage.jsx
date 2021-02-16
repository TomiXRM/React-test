import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props; //分割代入
  const contentStyle = {
    // color: color, //同じ名前の時は省略できる
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

//  default ColorfulMessage;
//export の種類
