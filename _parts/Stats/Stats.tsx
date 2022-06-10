import React, { ReactNode } from 'react';
import { StyledStat, StyledStatGroup } from './Stats.styles';
import { H1, Overline } from '../../_components/Typography/Typography';

interface StatProps {
  value: string | number | ReactNode;
  title: string;
}

export const Stat = ({ value = 0, title, ...rest }: StatProps) => {

  return (
    <StyledStat {...rest}>
      <H1 variant="h1" component="span">{value}</H1>
      <Overline className="overline-text" component="span" style={{ textAlign: 'center' }}>{title}</Overline>
    </StyledStat>
  )
}

export const StatGroup = ({ children }: { children: ReactNode }) => {
  return (
    <StyledStatGroup>
      {children}
    </StyledStatGroup>
  )
}
