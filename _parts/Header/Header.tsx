import React from 'react';
import { StyledHeader } from './Header.styles';
import Link from '../../_components/NavLink/NavLink';
import Container from '../../_components/Container/Container';
import useScroll from '../../_hooks/useScroll';

const Header = () => {
  const { offset, direction } = useScroll();

  return (
    <>
      <StyledHeader direction={direction} offset={offset}>
        <Container>
          <ul>
            <li><Link href="/falcon">Falcon 9</Link></li>
            <li><Link href="/falcon">Falcon Heavy</Link></li>
            <li><Link href="/falcon">Dragon</Link></li>
            <li><Link href="/falcon">Starship</Link></li>
            <li><Link href="/falcon">Human spaceflight</Link></li>
            <li><Link href="/falcon">Rideshare</Link></li>
            <li><Link href="/falcon">Starlink</Link></li>
          </ul>
        </Container>
      </StyledHeader>
    </>
  );
}

export default Header;
