import React from 'react';
type IButtonProps = React.ComponentProps<'button'>;
const Button = ({children, ...props}: IButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
