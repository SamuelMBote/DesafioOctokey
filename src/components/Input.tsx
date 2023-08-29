import React from 'react';
type IInputProps = React.ComponentProps<'input'> & {
  label: string;
  helperText?: string;
};
const Input = ({label, helperText, name, ...props}: IInputProps) => {
  return (
    <div>
      <label className="block mb-2 " htmlFor={name}>
        {label}
      </label>
      <input type="text" name={name} {...props} />
      <p className="mt-1 text-sm text-gray-500 " id={name}>
        {helperText}
      </p>
    </div>
  );
};

export default Input;
