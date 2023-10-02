import React from "react";

const TextInput = ({ label, placeholder }) => {
  return (
    <div className="textInputDiv flex flex-col space-y-2 w-full">
      <label for={label} className="font-semibold">
        {placeholder}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id="any"
        className="p-2 border border-gray-400 border-solid rounded placeholder-gray-300"
      />
    </div>
  );
};

export default TextInput;
