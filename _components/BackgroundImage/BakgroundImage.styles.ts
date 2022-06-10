import styled, {css, keyframes} from 'styled-components';

export interface BackgroundImageProps {
  src?: string;
}

const parallax = keyframes`
  0% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`

export const StyledBackgroundImage = styled.div<BackgroundImageProps>`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    content: '';
    display: block;
    ${props => props.src && css`background-image: url("${props.src}");`}
    background-size: cover;
    background-position: center center;
    
    animation-fill-mode: forwards;
    animation-name: ${parallax};
    animation-duration: 100s;
  }
  
  >.content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }

`;
