import styled, { css } from 'styled-components';

export interface DrawerProps {
  visible?: boolean;
}

const variants = {
  visible: css`
    right: 0;
  `,
  hidden: css`
    right: -30rem;
  `
}

export const StyledDrawer = styled.aside<DrawerProps>`
  z-index: 20;
  position: fixed;
  top: 0;
  right: -30rem;
  height: 100vh;
  width: 30rem;
  display: block;
  background: black;
  transition: right 0.3s ease-in-out;

  ${props => props.visible ? variants['visible'] : variants['hidden']};
`;
