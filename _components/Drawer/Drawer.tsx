import React, {ReactNode} from 'react';
import { StyledDrawer, DrawerProps } from './Drawer.styles';

const Drawer = ({ ...rest }: DrawerProps & { children?: ReactNode}) => (
  <StyledDrawer
    {...rest}
  />
);

export default Drawer;
