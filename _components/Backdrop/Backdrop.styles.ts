import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

interface BackdropProps {
  visible?: boolean;
  initial?: boolean;
}

const variants = {
  visible: css`
    pointer-events: all;
    opacity: 1;
    &:hover {
      cursor: pointer;
    }
  `,
  hidden: css`
    opacity: 0;
    pointer-events: none;
  `
}

export const StyledBackdrop = styled.div<BackdropProps>`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0, 0.4);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  
  ${props => props.visible ? variants['visible'] : variants['hidden']};
`;
