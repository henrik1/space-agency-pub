import React from 'react';
import { StyledFooter } from './Footer.styles';
import Link from '../../_components/NavLink/NavLink';
import Container from '../../_components/Container/Container';

const Footer = () => (
  <StyledFooter>
    <Container>
      <ul>
        <li><Link href="/404">Instagram</Link></li>
        <li><Link href="/404">Facebook</Link></li>
        <li><Link href="/404">Twitter</Link></li>
        <li><Link href="/404">Tik Tok</Link></li>
      </ul>
    </Container>
  </StyledFooter>
);

export default Footer;
