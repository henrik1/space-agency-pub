import styled from 'styled-components';

export interface ImageProps {
  src: string;
}

export interface WrapperProps {
  aspectRatio: number;
}

export const StyledWrapper = styled.div<WrapperProps>`
  width: 100%;
  padding-top: ${props => (props.aspectRatio)*100}%;
  overflow: hidden;
  position: relative;
  display: block;
  margin-bottom: 4rem;
`;

export const StyledImage = styled.div<ImageProps>`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: block;
  content: '';
  background: url("${props => props.src}") no-repeat;
  background-position: center center;
  background-size: cover;
  transition: transform 0.5s ease-out;
  transform: scale(1.1);


  &:hover {
    transition: transform 8s ease-out;
    transform: scale(1);
  }
`;
