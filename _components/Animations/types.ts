import { ReactNode } from 'react';

export interface AnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  visible?: boolean;
}
