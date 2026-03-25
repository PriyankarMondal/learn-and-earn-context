
import React from "react";

const InputField = ({ type, placeholder, icon, value, onChange }) => {
  return (
    <div className="relative w-full mb-4">
      {icon && (
        <img 
          src={icon} 
          alt="" 
          className="absolute left-[15px] top-1/2 -translate-y-1/2 w-5 h-5 object-contain pointer-events-none z-10" 
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg bg-[#f9fafb] text-[15px] outline-none focus:border-[#82b440] transition-all"
      />
    </div>
  );
};

export default InputField;