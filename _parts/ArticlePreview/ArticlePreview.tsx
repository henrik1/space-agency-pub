import React, {HTMLAttributes} from 'react';
import { H2, Overline, P } from '../../_components/Typography/Typography';
import { StyledArticlePreview } from './ArticlePreview.styles';
import Button from '../../_components/Button/Button';
import { InView } from 'react-intersection-observer';
import FadeInSlideUp from '../../_components/Animations/FadeInSlideUp';
import Image from '../../_components/Image/Image';
import Link from 'next/link';

interface ArticlePreviewProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  overline: string;
  title: string;
  synopsis?: string;
  linkText?: string;
  href?: string;
  idx?: number;
}

const ArticlePreview = ({ synopsis, image, title, overline, href, linkText = 'Learn More', idx, ...rest }: ArticlePreviewProps) => {

  const delay = ((idx ?? 0) % 2) * 0.3;

  return (
    <StyledArticlePreview {...rest}>
      <InView threshold={0.2} triggerOnce>
        {({ ref, inView }: any) => (
          <div ref={ref}>
            <FadeInSlideUp visible={inView} delay={delay}><Image src={image} /></FadeInSlideUp>
            <FadeInSlideUp visible={inView} delay={delay + 0.1}><Overline>{overline}</Overline></FadeInSlideUp>
            <FadeInSlideUp visible={inView} delay={0.1}><H2>{title}</H2></FadeInSlideUp>
            {synopsis && (
              <FadeInSlideUp visible={inView} delay={0.2}><P>{synopsis}</P></FadeInSlideUp>
            )}
            {href && (
              <FadeInSlideUp visible={inView} delay={synopsis ? 0.3 : 0.2}>
                <Link href={href}><Button>{linkText}</Button></Link>
              </FadeInSlideUp>
            )}
          </div>
        )}
      </InView>
    </StyledArticlePreview>
  );
}

export default ArticlePreview;
