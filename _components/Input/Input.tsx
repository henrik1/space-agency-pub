import React, { HTMLAttributes } from 'react';
import { StyledInput } from './Input.styles';

const Input = ({
  children,
  ...rest
}: HTMLAttributes<HTMLInputElement>) => {
  return (
    <StyledInput
      {...rest} />
  );
};

export default Input;
