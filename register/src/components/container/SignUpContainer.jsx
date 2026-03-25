import React, { useState } from "react";
import LeftPanel from "../signUp/LeftPanel";
import SignUpForm from "../signUp/SignUpForm";

const SignUpContainer = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", password: "", phone: "",
  });

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    /* h-auto: Allows mobile to grow as long as the content.
       md:h-screen: Locks height only on laptops.
       md:overflow-hidden: Prevents the whole page from scrolling on laptops.
    */
    <div className="flex flex-col md:flex-row w-full h-auto md:h-screen md:overflow-hidden font-sans">
      <LeftPanel />
      <SignUpForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignUpContainer;