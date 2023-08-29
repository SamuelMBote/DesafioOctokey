import React from 'react';
type ISelectProps = React.ComponentProps<'select'> & {
  label: string;
  helperText?: string;
};
const Select = ({
  label,
  name,
  helperText,
  children,
  ...props
}: ISelectProps) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      <select name={name} {...props}>
        {children}
      </select>
      <p className="mt-1 text-sm text-gray-500" id={name}>
        {helperText}
      </p>
    </div>
  );
};

export default Select;
