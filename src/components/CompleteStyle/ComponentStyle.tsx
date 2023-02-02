import React from "react";

interface ComponentStyleProps {
  children: JSX.Element;
}
const ComponentStyle: React.FC<ComponentStyleProps> = ({ children }) => {
  const styleConfigure = {
    display: "flex",
    justifyContent: "space-around",
    border: "1px solid black",
    width: "90%",
    margin: "2rem auto",
    padding: "1rem",
  };
  return <div style={styleConfigure}>{children}</div>;
};

export default ComponentStyle;
