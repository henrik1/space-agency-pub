import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding-left: 8rem;
  padding-right: 8rem;
  width: 100%;
  box-sizing: border-box;
  max-width: 1680px;

  @media (max-width: 1280px) {
    max-width: 100vw;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  @media (max-width: 768px) {
    max-width: 100vw;
    padding-left: 2rem;
    padding-right: 2rem;
  }

`;

export default Container;
