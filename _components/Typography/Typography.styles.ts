import styled, { css } from 'styled-components';
import { HTMLAttributes } from 'react';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'action' | 'overline' | 'p' | 'strong' | 'b' | 'quote';

export interface StyledTypographyProps extends HTMLAttributes<HTMLSpanElement> {
  variant: Variant;
}

const variants = {
  h1: css`
    margin: 0;
    text-transform: uppercase;
    font-weight: 800;
    color: white;
    font-size: 3.5rem;

    @media (max-width: 1280px) {
      overflow-wrap: break-word;
    }
  `,
  h2: css`
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 800;
    color: white;

    @media (max-width: 1280px) {
      overflow-wrap: break-word;
    }
  `,
  h3: css`
    font-size: 1.75rem;
    color: white;
    line-height: 3rem;
    font-weight: 200;
    letter-spacing: 2px;
    
    @media (max-width: 1280px) {
      overflow-wrap: break-word;
    }
  `,
  h4: css`
  `,
  h5: css`
  `,
  h6: css`
  `,
  action: css``,
  overline: css`
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 300;
    color: white;
  `,
  p: css`
    font-size: 1.25rem;
    font-weight: 300;
    color: white;
    letter-spacing: 1px;
    line-height: 2.5rem;
  `,
  strong: css``,
  b: css`
    font-weight: 600;
    * {
      font-weight: 600;
    }
  `,
  quote: css`
    display: block;
    width: 100%;
    margin: 0;
    font-size: 1rem;
    line-height: 3rem;
    font-weight: 200;
    font-style: italic;
  `
};

export const StyledTypography = styled.span<StyledTypographyProps>`
  ${props => variants[props.variant]};
`;
