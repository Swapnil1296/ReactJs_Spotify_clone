import React from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";

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
      </div>
    </div>
  );
};
