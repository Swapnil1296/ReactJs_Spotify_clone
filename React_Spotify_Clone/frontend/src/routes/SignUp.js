import React from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link } from "react-router-dom";

export const SignUpComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="input w-1/3 py-10 flex flex-col items-center justify-center">
        <div className="font-bold mb-12 text-2xl">
          Sign up for free to start listening
        </div>
        <TextInput label="What's your Email" placeholder="Enter your Email " />
        <PasswordInput label="Create Password" placeholder="Create Password" />
        <TextInput
          label="What should we call you?"
          placeholder="Enter a profile name "
          className="my-6"
        />

        <div className="w-full flex items-center justify-center my-8">
          <button className="bg-green-500 font-semibold p-3 px-10 rounded-full">
            SIGN UP
          </button>
        </div>
        <div className="border-b border-solid border-gray-300 w-full"></div>
        <div className=" my-6 font-semibold text-lg">Have an account ? </div>
        <div className="border border-gray-500 text-gray-500 font-bold w-full flex items-center justify-center rounded-full py-4">
          <Link to="/login">LOG IN INSTEAD</Link>
        </div>
      </div>
    </div>
  );
};
