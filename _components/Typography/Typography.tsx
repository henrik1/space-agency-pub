import React from 'react';
import { StyledTypography, StyledTypographyProps, Variant } from './Typography.styles';

interface TypographyProps extends Omit<StyledTypographyProps, 'variant'> {
  component?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hr' | 'p' | 'strong' | 'b' | 'div' | 'quote';
  children: React.ReactNode;
  variant?: Variant;
}

const Typography = ({ children, component = 'span', variant, ...rest }: TypographyProps) => {

  return (
    <StyledTypography
      as={component}
      variant={variant || component as Variant}
      {...rest}
    >
      {children}
    </StyledTypography>
  )
}

export const Strong = (props: Omit<TypographyProps, 'variant'>) => <Typography component="strong" {...props} variant="strong" />

export const B = (props: Omit<TypographyProps, 'variant'>) => <Typography component="b" {...props} variant="b" />

export const P = (props: Omit<TypographyProps, 'variant'>) => <Typography component="p" {...props} variant="p" />

export const H1 = (props: TypographyProps) => <Typography component="h1" {...props}/>
export const H2 = (props: TypographyProps) => <Typography component="h2" {...props}/>
export const H3 = (props: TypographyProps) => <Typography component="h3" {...props}/>
export const H4 = (props: TypographyProps) => <Typography component="h4" {...props}/>
export const H5 = (props: TypographyProps) => <Typography component="h5" {...props}/>
export const Quote = (props: TypographyProps) => <Typography component="quote" {...props}/>
export const Overline = (props: TypographyProps) => <Typography component="span" variant="overline" {...props}/>

export default Typography;
