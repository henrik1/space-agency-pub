import React from 'react';
import { H2, Overline, P } from '../../_components/Typography/Typography';
import Button from '../../_components/Button/Button';
import { InView } from 'react-intersection-observer';
import FadeInSlideUp from '../../_components/Animations/FadeInSlideUp';
import Container from '../../_components/Container/Container';
import BackgroundImage from '../../_components/BackgroundImage/BackgroundImage';
import { Alignment, StyledArticleFeature, StyledArticleFeatureContent, Variant } from './ArticleFeature.styles';
import Image from '../../_components/Image/Image';
import Link from 'next/link';

interface ArticleFeatureProps {
  title: string;
  overline?: string;
  synopsis?: string;
  href?: string;
  image?: string;
  inlineImage?: boolean,
  linkText?: string;
  variant?: Variant;
  alignment?: Alignment;
}

const ArticleFeature = ({
  title,
  overline,
  synopsis,
  href,
  image,
  inlineImage = false,
  linkText = 'Learn more',
  variant = Variant.center,
  alignment = Alignment.ltr,
  ...rest
}: ArticleFeatureProps) => (
  <BackgroundImage src={inlineImage ? undefined : image} {...rest}>
    <StyledArticleFeature variant={variant}>
      <Container>
        <InView threshold={0.3} triggerOnce>
          {({ ref, inView }: any) => (
            <StyledArticleFeatureContent alignment={alignment} ref={ref}>
              <div>
                {overline && <FadeInSlideUp visible={inView} ><Overline>{overline}</Overline></FadeInSlideUp>}
                <FadeInSlideUp visible={inView} delay={overline ? 0.1 : 0}><H2 variant="h1">{title}</H2></FadeInSlideUp>
                <FadeInSlideUp visible={inView} delay={overline ? 0.2 : 0.1}><P>{synopsis}</P></FadeInSlideUp>
                {href && (
                  <FadeInSlideUp visible={inView} delay={overline ? 0.3 : 0.2}>
                    <Link href={href}><Button>{linkText}</Button></Link>
                  </FadeInSlideUp>
                )}
              </div>
              <div>
                <FadeInSlideUp visible={inView}>
                  {inlineImage && image && (
                    <Image src={image} aspectRatio={4/3} />
                  )}
                </FadeInSlideUp>
              </div>
            </StyledArticleFeatureContent>
          )}
        </InView>
      </Container>
    </StyledArticleFeature>
  </BackgroundImage>
);

export default ArticleFeature;
