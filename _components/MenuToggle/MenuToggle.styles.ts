import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 8rem;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  right: 3rem;
  top: 0;
`;

export const StyledMenuToggle = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`;
