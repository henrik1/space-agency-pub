import * as React from "react";
import { motion } from "framer-motion";
import { MouseEventHandler } from 'react';
import { StyledMenuToggle, Wrapper } from './MenuToggle.styles';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

interface MenuToggleProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  open?: boolean;

}

const MenuToggle = ({ onClick, open }:MenuToggleProps) => (
  <Wrapper>
    <StyledMenuToggle onClick={onClick}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={open ? 'open' : 'closed'}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          animate={open ? 'open' : 'closed'}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          animate={open ? 'open' : 'closed'}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </StyledMenuToggle>
  </Wrapper>
);

export default MenuToggle;
