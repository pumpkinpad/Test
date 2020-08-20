import React from "react";

interface Props {
  style: {};
  buttonText: string;
}
const HeaderIcon: React.FC<Props> = (props) => {
  return <button style={props.style}>{props.buttonText}</button>;
};
export default HeaderIcon;
