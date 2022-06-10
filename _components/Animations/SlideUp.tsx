import React, {ForwardedRef, forwardRef} from 'react';
import { motion } from 'framer-motion';
import { AnimationProps } from './types';
import {easeInOut} from './transitions';

const SlideUp = forwardRef(({
  children,
  delay = 0,
  duration = 0.5,
  visible,
  ...rest
}: AnimationProps, ref: ForwardedRef<HTMLDivElement>) => {
  const variants = {
    hidden: {
      y: '2rem',
    },
    visible: {
      y: 0,
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

SlideUp.displayName = 'SlideUp';

export default SlideUp;

