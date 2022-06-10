import React, { HTMLAttributes, MouseEventHandler } from 'react';
import { StyledBackdrop } from './Backdrop.styles';

interface BackdropProps {
  onClose: MouseEventHandler<HTMLDivElement>;
  visible?: boolean;
}

const Backdrop = ({ onClose, ...rest }: BackdropProps & HTMLAttributes<HTMLDivElement>) => (
  <StyledBackdrop
    {...rest}
    onClick={onClose}
  />
);

export default Backdrop;
