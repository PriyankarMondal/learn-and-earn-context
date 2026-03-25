
import React from "react";
import logo from "../../assets/logo.png";
import image from "../../assets/image.png";

const LeftPanel = () => {
  return (
    <div className="flex-1 bg-[linear-gradient(135deg,#f3ea67_0%,#a8a7a4_100%)] flex flex-col items-center justify-center p-8">
      <img src={logo} alt="Logo" className="w-[400px] mb-6 max-w-full" />
      <h2 className="text-[40px] font-bold text-[#4c8e37] mb-4 text-center">
        Join Desun Academy Today!
      </h2>
      <p className="text-[20px] font-semibold text-[#1f2937] mb-8 text-center">
        Create your account to start learning new skills
      </p>
      <img src={image} alt="Hero" className="w-full h-auto max-w-[500px]" />
    </div>
  );
};

export default LeftPanel;