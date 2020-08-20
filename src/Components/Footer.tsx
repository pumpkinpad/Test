import React from "react";

interface Props {
  footerText: string;
}

const Footer: React.FC<Props> = (props) => {
  return <div>{props.footerText}</div>;
};

export default Footer;
