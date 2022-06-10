import styled from 'styled-components';

interface FooterProps {
}

export const StyledFooter = styled.nav<FooterProps>`
  box-sizing: border-box;
  padding: 8rem 0;
  height: 8rem;
  background: black;
  width: 100vw;
  z-index: 5;
  background: rgba(0,0,0,0);

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
