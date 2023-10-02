import React from "react";

const PasswordInput = ({ label, placeholder }) => {
  return (
    <div className="textInputDiv flex flex-col space-y-2 w-full">
      <label for={label} className="font-semibold">
        {placeholder}
      </label>
      <input
        type="password"
        placeholder={placeholder}
        id={label}
        className="p-3 border border-gray-400 border-solid rounded placeholder-gray-300"
      />
    </div>
  );
};

export default PasswordInput;
