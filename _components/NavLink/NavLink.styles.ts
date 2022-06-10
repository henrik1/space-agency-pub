import styled from 'styled-components';

export const StyledNavLink = styled.span`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    height: 1px;
    background: white;
    left: unset;
    right: 0;
    width: 0;
    transition: width 0.3s ease-in-out;
  }
  
  &:hover {
    cursor: pointer;
    
    &::after {
      right: unset;
      left: 0;
      width: 100%;
    }
  }
  
`;
