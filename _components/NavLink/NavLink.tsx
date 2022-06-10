import React, { HTMLAttributes, ReactNode } from 'react';
import NextLink from 'next/link';
import { StyledNavLink } from './NavLink.styles';

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link = ({
  children,
  href,
  ...rest
}: LinkProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <StyledNavLink {...rest}>
      <NextLink href={href}>
        {children}
      </NextLink>
    </StyledNavLink>
  );
};

export default Link;
