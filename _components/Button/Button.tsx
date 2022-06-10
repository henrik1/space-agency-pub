import React, { HTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  backgroundColor?: string;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({
  children,
  ...rest
}: ButtonProps & HTMLAttributes<HTMLButtonElement>) => {
  return (
      <StyledButton
        type="button"
        {...rest}>
        <span>{children}</span>
      </StyledButton>
  );
};

export default Button;
