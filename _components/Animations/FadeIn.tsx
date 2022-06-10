import React, {ForwardedRef, forwardRef} from 'react';
import { motion } from 'framer-motion';
import { AnimationProps } from './types';
import { easeInOut } from './transitions';

const FadeIn = forwardRef(({
  children,
  delay = 0,
  duration = 0.75,
  visible,
  ...rest
}: AnimationProps, ref: ForwardedRef<HTMLDivElement>) => {

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  };

  return (
    <motion.div
      animate={visible ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ ...easeInOut, duration, delay }}
      {...rest}
      ref={ref}>
      {children}
    </motion.div>
  )
});

FadeIn.displayName = 'FadeIn';

export default FadeIn;

