import { useCallback, useEffect, useState } from 'react';

export enum ScrollDirection {
  'up' = 'up',
  'down' = 'down',
}

const useScroll = () => {
  const [offset, setOffsetTop] = useState(0);
  const [direction, setDirection] = useState<ScrollDirection>(ScrollDirection.down);

  const handleScroll = useCallback(() => {
    setDirection(window.scrollY > offset ? ScrollDirection.down : ScrollDirection.up);
    setOffsetTop(window.scrollY);
  }, [offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { offset, direction };
}

export default useScroll;
