import React from "react";

import "../../../styles/css/Button.min.css";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButton> = (props) => {
  return (
    <button className="Button shadow" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
