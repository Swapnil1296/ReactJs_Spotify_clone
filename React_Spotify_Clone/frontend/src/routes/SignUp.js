import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequests } from "../utils/serverHelpers";

export const SignUpComponent = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const signUp = async (event) => {
    event.preventDefault();
    const data = { email, password, username, firstName, lastName };
    console.log("data", data);
    const response = await makeUnauthenticatedPOSTRequests(
      "/auth/register",
      data
    );
    if (response && !response.err) {
      console.log("response data +", response);

      // setting received token to cookies & after 30 days expire period.

      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Success !");
      navigate("/home");
    } else {
      alert("Failure");
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="input w-1/3 py-10 flex flex-col items-center justify-center">
        <div className="font-bold mb-12 text-2xl">
          Sign up for free to start listening
        </div>
        <TextInput
          label="What's your Email"
          placeholder="Enter your Email "
          value={email}
          setValue={setEmail}
        />
        <PasswordInput
          label="Create Password"
          placeholder="Create Password"
          value={password}
          setValue={setPassword}
        />
        <TextInput
          label="What should we call you ? "
          placeholder="Enter your profile name "
          value={username}
          setValue={setUsername}
        />

        <div className="w-full flex justify-between items-center space-x-8">
          <TextInput
            label="First Name"
            placeholder="Enter a First name "
            value={firstName}
            setValue={setFirstName}
            className="my-6"
          />
          <TextInput
            label="Last Name"
            placeholder="Enter a Last name "
            className="my-6"
            value={lastName}
            setValue={setLastName}
          />
        </div>

        <div className="w-full flex items-center justify-center my-8">
          <button
            className="bg-green-500 font-semibold p-3 px-10 rounded-full"
            onClick={signUp}
          >
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
