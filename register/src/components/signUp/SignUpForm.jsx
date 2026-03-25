import React from "react";
import InputField from "../ui/InputFild.jsx";
import userIcon from "../../assets/userIcon.png";
import mailIcon from "../../assets/mailIcon.png";
import lockIcon from "../../assets/lockIcon.png";
import phoneIcon from "../../assets/phoneIcon.png";
import googleIcon from "../../assets/googleIcon.png";
import facbookIcon from "../../assets/facbookIcon.png";

const SignUpForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    /* FIXED:
      - Changed h-full to h-auto on mobile to prevent clipping.
      - justify-start on mobile ensures content starts at the top.
      - Added min-h-screen for mobile to allow proper scrolling.
    */
    <div className="flex-1 bg-white flex flex-col items-center justify-center p-6 md:p-10 h-full overflow-y-auto">
      <div className="w-full max-w-[500px] py-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2">Student Sign Up</h2>
        <p className="text-gray-500 text-center mb-8">Sign up for your Desun Academy account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField type="text" placeholder="Full Name" icon={userIcon} value={formData.name} onChange={(e) => handleChange(e, "name")} />
          <InputField type="email" placeholder="Email Address" icon={mailIcon} value={formData.email} onChange={(e) => handleChange(e, "email")} />
          <InputField type="password" placeholder="Create Password" icon={lockIcon} value={formData.password} onChange={(e) => handleChange(e, "password")} />
          <InputField type="text" placeholder="Phone Number" icon={phoneIcon} value={formData.phone} onChange={(e) => handleChange(e, "phone")} />

          <p className="text-xs text-center text-gray-600 my-4">
            By signing up, you agree to our <span className="text-red-500 cursor-pointer hover:underline">Terms of Service</span> and <span className="text-red-500 cursor-pointer hover:underline">Privacy Policy</span>.
          </p>

          <button type="submit" className="w-full py-4 rounded-lg text-white font-bold bg-gradient-to-r from-[#82b440] to-[#f1cc3a] hover:shadow-lg transition-all">
            Sign Up
          </button>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button type="button" className="flex-1 flex items-center justify-center border py-3 rounded-lg hover:bg-gray-50 transition-all text-sm px-2">
              <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2 shrink-0" /> 
              <span className="whitespace-nowrap">Continue with Google</span>
            </button>
            <button type="button" className="flex-1 flex items-center justify-center border py-3 rounded-lg hover:bg-gray-50 transition-all text-sm px-2">
              <img src={facbookIcon} alt="Facebook" className="w-5 h-5 mr-2 shrink-0" /> 
              <span className="whitespace-nowrap">Continue with Facebook</span>
            </button>
          </div>
          
          <p className="text-center mt-6 text-sm text-gray-700 pb-10 md:pb-0">
            Already have an account? <span className="text-red-600 font-bold cursor-pointer hover:underline">Log in</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;