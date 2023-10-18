import React, { useState } from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequests } from "../utils/serverHelpers";
import { useCookies } from "react-cookie";

export const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    const data = { email, password };
    console.log("data", data);
    const response = await makeUnauthenticatedPOSTRequests("/auth/login", data);
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
        <div className="font-bold mb-12">To continue , log in to Spotify..</div>
        <TextInput
          label="Enter Email address or Username"
          placeholder="Enter Email address or Username"
          value={email}
          setValue={setEmail}
        />
        <PasswordInput
          label="Enter Password"
          placeholder="Enter Password"
          value={password}
          setValue={setPassword}
        />
        <div className="w-full flex items-center justify-end my-8">
          <button
            className="bg-green-500 font-semibold p-3 px-10 rounded-full"
            onClick={login}
          >
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
