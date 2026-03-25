import React from "react";

const Button = ({ icon: Icon, text }) => {
  return (
    <button className="social-btn">
      <Icon size={18} />
      <span>{text}</span>
    </button>
  );
};

export default Button;