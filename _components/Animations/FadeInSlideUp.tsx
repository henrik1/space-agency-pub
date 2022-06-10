import React, {ForwardedRef, forwardRef} from 'react';
import { AnimationProps } from './types';
import FadeIn from './FadeIn';
import SlideUp from './SlideUp';

const FadeInSlideUp = forwardRef(({
  children,
  delay = 0,
  duration = 0.75,
  visible,
  ...rest
}: AnimationProps, ref: ForwardedRef<HTMLDivElement>) => {

  return (
    <FadeIn
      delay={delay}
      duration={duration}
      visible={visible}
      {...rest}
      ref={ref}>
      <SlideUp
        delay={delay}
        duration={duration}
        visible={visible}
      >
        {children}
      </SlideUp>
    </FadeIn>
  )
});

FadeInSlideUp.displayName = 'FadeInSlideUp';

export default FadeInSlideUp;

