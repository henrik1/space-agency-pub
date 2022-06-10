import React, { HTMLAttributes } from 'react';
import { StyledBackgroundImage } from './BakgroundImage.styles';
import { BackgroundImageProps } from './BakgroundImage.styles';

const BackgroundImage = ({
  src, children, ...rest
}: BackgroundImageProps & HTMLAttributes<HTMLDivElement>) => (
  <StyledBackgroundImage
    src={src}>
    <div className="content" {...rest}>
      {children}
    </div>
  </StyledBackgroundImage>
);

export default BackgroundImage;
