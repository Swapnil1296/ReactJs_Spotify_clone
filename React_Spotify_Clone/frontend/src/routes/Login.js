import React from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link } from "react-router-dom";

export const LoginComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="input w-1/3 py-10 flex flex-col items-center justify-center">
        <div className="font-bold mb-12">To continue , log in to Spotify..</div>
        <TextInput
          label="Enter Email address or Username"
          placeholder="Enter Email address or Username"
        />
        <PasswordInput label="Enter Password" placeholder="Enter Password" />
        <div className="w-full flex items-center justify-end my-8">
          <button className="bg-green-500 font-semibold p-3 px-10 rounded-full">
            LOG IN
          </button>
        </div>
        <div className="border-b border-solid border-gray-300 w-full"></div>
        <div className=" my-6 font-semibold text-lg">
          Don't have an account ?
        </div>
        <div className="border border-gray-500 text-gray-500 font-bold w-full flex items-center justify-center rounded-full py-4">
          <Link to="/signup"> SIGN UP FOR SPOTIFY</Link>
        </div>
      </div>
    </div>
  );
};
