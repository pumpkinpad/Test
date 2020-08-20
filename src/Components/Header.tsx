import React from "react";
import HeaderIcon from "./HeaderIcon";

interface Props {
  style: {};
  headerText?: string;
  headerButtonTextArray: string[];
}
const headerIconStyle = {
  backgroundColor: "grey",
  color: "white",
  marginLeft: "20px",
};
const Header: React.FC<Props> = (props) => {
  return (
    <div style={props.style}>
      <h1 style={{ textAlign: "center" }}> {props.headerText}</h1>
      {props.headerButtonTextArray.map((buttonText) => {
        return <HeaderIcon style={headerIconStyle} buttonText={buttonText} />;
      })}
    </div>
  );
};
export default Header;
