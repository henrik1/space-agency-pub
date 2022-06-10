import styled, { css } from 'styled-components';
import { ScrollDirection } from '../../_hooks/useScroll';

interface HeaderProps {
  offset: number;
  direction: ScrollDirection
}

export const StyledHeader = styled.nav<HeaderProps>`
  position: fixed;
  box-sizing: border-box;
  padding: 0;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 5;
  background: rgba(0,0,0,0);
  transition: all 0.3s ease-in-out;

  ${props => props.offset > 200 ? css`background: rgba(0,0,0,1)` : null};
  ${props => props.direction === ScrollDirection.down && props.offset > 200 ? css`top: -8rem` : null};

  @media (max-width: 768px) {
    display: none;
  }
  
  ul {
    padding: 0;
    margin: 0;
    height: 8rem;
    flex: 1;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    li {
      margin-right: 2rem;
      list-style: none;

      @media (max-width: 1024px) {
        &:nth-child(n+4) {
          display: none;
        }
      }
      
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
