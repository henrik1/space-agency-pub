import styled, { keyframes } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
}

export const StyledButton = styled.button<ButtonProps>`
  height: 4rem;
  box-shadow: 0 0 0 3px white;
  border: none;
  box-sizing: border-box;
  padding-left: 3rem;
  padding-right: 3rem;
  background: none;
  outline: none;
  position: relative;
  color: white;
  font-size: 1rem;
  letter-spacing: 0;
  font-weight: 300;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  width: 14rem;
  
  > * {
    top: 0;
    left: 0;
    position: absolute;
    line-height: 4rem;
    width: 100%;
    z-index: 1;
  }
  
  &::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    bottom: unset;
    height: 0;
    top: 0;
    width: 100%;
    display: block;
    background: white;
    z-index: 0;
    transition: height 0.2s ease-in-out;
  }
  
  &:hover {
    cursor: pointer;
    color: black;
    
    &::after {
      top: unset;
      height: 100%;
      bottom: 0;
      transition: all 0.3s ease-in-out;
    }   
  }
  
`;
