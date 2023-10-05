import React from "react";

const TextInput = ({ label, placeholder, value, setValue }) => {
  return (
    <div className="textInputDiv flex flex-col space-y-2 w-full my-6">
      <label for={label} className="font-semibold">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={label}
        className="p-3 border border-gray-400 border-solid rounded placeholder-gray-300"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
