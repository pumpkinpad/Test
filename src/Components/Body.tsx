import React from "react";

interface Props {
  style: {};
  bodyText: string;
}
const Body: React.FC<Props> = (props) => {
  return (
    <div style={props.style}>
      <p style={{ textAlign: "center" }}>{props.bodyText}</p>
    </div>
  );
};
export default Body;
