import React, {HTMLAttributes} from 'react';
import { H2, Overline, P } from '../../_components/Typography/Typography';
import { StyledArticle } from './Article.styles';
import { InView } from 'react-intersection-observer';
import FadeInSlideUp from '../../_components/Animations/FadeInSlideUp';
import Image from '../../_components/Image/Image';
import List from '../../_components/List/List';
import Container from '../../_components/Container/Container';

interface ArticlePreviewProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  overline: string;
  title: string;
  synopsis?: string | null;
}

const splitText = (text: string) => {
  const sentences = text.split('.');
  return [
    sentences.slice(0, Math.floor(sentences.length/2)).join('.') + '.',
    sentences.slice(Math.floor(sentences.length/2)).join('.')
  ];
}

const Article = ({ synopsis, image, title, overline, ...rest }: ArticlePreviewProps) => (
  <StyledArticle {...rest}>
    <Container>
      <InView threshold={0.2} triggerOnce>
        {({ ref, inView }: any) => (
          <div ref={ref}>
            <FadeInSlideUp visible={inView}><Image aspectRatio={9/16} src={image} /></FadeInSlideUp>
            <FadeInSlideUp visible={inView}><Overline>{overline}</Overline></FadeInSlideUp>
            <FadeInSlideUp visible={inView}><H2>{title}</H2></FadeInSlideUp>
            {synopsis && (
              <FadeInSlideUp visible={inView} delay={0.2}>
                <List>
                  {splitText(synopsis).map((section, idx) => (
                    <P key={idx}>{section}</P>
                  ))}
                </List>
              </FadeInSlideUp>
            )}
          </div>
        )}
      </InView>
    </Container>
  </StyledArticle>
);

export default Article;
