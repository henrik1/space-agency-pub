import React, { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import { Easing } from 'framer-motion/types/types';

interface CountProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  from: number;
  to: number;
  duration: number;
  delay?: number;
  ease?: Easing
}

const Count = ({ show, from, to, duration, delay, ease = 'easeOut' }: CountProps) => {

  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!show) return;
    const node: any = counterRef.current;
    if (!node) return;
    const controls = animate(from, to, {
      duration,
      delay,
      ease,
      onUpdate(value) {
        node.textContent = Math.round(value);
      }
    });

    return () => controls.stop();
  }, [show]);

  return (
    <span ref={counterRef} style={{ height: '4rem', minHeight: '4rem', display: 'inline-block', minWidth: 10 }} />
  );
};

Count.displayName = 'Count';

export default Count;
