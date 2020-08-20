import React from "react";

interface Props {
  className: string;
  id: string;
  content: string;
  onMouseEnter: any;
  onMouseLeave: any;
}

const HoverCorner: React.FC<Props> = (props) => {
  return (
    <div
      id={props.id}
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.content}
    </div>
  );
};

export default HoverCorner;
