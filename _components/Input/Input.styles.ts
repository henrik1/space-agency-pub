import styled from 'styled-components';

export const StyledInput = styled.input`
  outline: 0;
  height: 5rem;
  min-width: 22rem;
  padding: 0 2rem;
  border: none;
  box-shadow: 0 0 0 3px rgba(255,255,255, 0);
  background: rgba(33,33,33);
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  
  ::placeholder {
    color: rgb(100,100,100);
    text-transform: uppercase;
    font-size: 1rem;
  }
  transition: box-shadow 0.2s ease-in-out;
  
  &:hover {
    box-shadow: 0 0 0 1px rgba(255,255,255, 0.5);
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(255,255,255, 0.7);
  }
`;
