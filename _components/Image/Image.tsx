import React, { HTMLAttributes } from 'react';
import {
  ImageProps as StyledImageProps, StyledImage, StyledWrapper, WrapperProps
} from './Image.styles';

type ImageProps = StyledImageProps & Partial<WrapperProps & HTMLAttributes<HTMLDivElement>>;

const Image = ({ src, aspectRatio = 3/4, ...rest }: ImageProps) => (
  <StyledWrapper aspectRatio={aspectRatio} {...rest}>
    <StyledImage src={src} />
  </StyledWrapper>
);

export default Image;
