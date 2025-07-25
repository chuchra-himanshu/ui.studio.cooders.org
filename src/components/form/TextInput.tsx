import React from "react";

const TextInput: React.FC<TextInputPropsInterface> = ({
  id,
  inputType,
  label,
  name,
  value,
  required,
  placeholder = "",
  disabled = false,
  handleInputChange,
}) => {
  return (
    <div className="flex flex-col text-text-secondary font-medium focus-within:text-accent gap-1 transition-all ease-in-out duration-200 mb-[14px]">
      <label htmlFor={id} className="text-[17px] ml-1">
        {label}
        {required && <span className="text-red-800">*</span>}
      </label>
      <input
        type={inputType}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        disabled={disabled}
        className="outline-none w-full rounded-[10px] px-3 py-2 border-2 border-border-primary focus:text-text-primary focus:border-accent transition-all ease-in-out duration-200"
      />
    </div>
  );
};

export default TextInput;
