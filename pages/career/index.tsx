import type { NextPage } from 'next'
import Container from '../../_components/Container/Container';
import BackgroundImage from '../../_components/BackgroundImage/BackgroundImage';
import { H1, H2 } from '../../_components/Typography/Typography';
import { InView } from 'react-intersection-observer';
import FadeInSlideUp from '../../_components/Animations/FadeInSlideUp';
import React from 'react';
import Button from '../../_components/Button/Button';
import ArticleFeature from '../../_parts/ArticleFeature/ArticleFeature';
import Input from '../../_components/Input/Input';

const Career: NextPage = () => {
  return (
    <div style={{ paddingTop: 0, margin: 0 }}>
      <BackgroundImage
        style={{ justifyContent: 'center' }}
        src="https://images.unsplash.com/photo-1609525709961-6b619b661122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
      >
        <Container style={{ marginTop: '8rem' }}>
          <InView threshold={0.5}>
            {({ ref, inView }: any) => (
              <div ref={ref}>
                <FadeInSlideUp visible={inView}>
                  <H1 style={{ paddingBottom: '2rem', maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
                    The journey begins
                  </H1>
                </FadeInSlideUp>
                <FadeInSlideUp visible={inView} delay={0.1}>
                  <H2 variant="p" style={{ paddingBottom: '4rem', maxWidth: 768, margin: '0 auto', textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl nec risus porta efficitur id at risus. Vestibulum semper id tellus non blandit. Vivamus dapibus, ex vel cursus lacinia, risus quam egestas nulla, eget pharetra neque dolor eu justo.
                  </H2>
                </FadeInSlideUp>
                <FadeInSlideUp visible={inView} delay={0.2}>
                  <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4rem' }}>
                    <Input placeholder="Search for open position" />
                  </div>
                </FadeInSlideUp>
                <FadeInSlideUp visible={inView} delay={0.3}>
                  <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button>View all openings</Button>
                  </div>
                </FadeInSlideUp>
              </div>
            )}
          </InView>

        </Container>
      </BackgroundImage>

      <ArticleFeature
        title="We're making history"
        synopsis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl nec risus porta efficitur id at risus. Vestibulum semper id tellus non blandit. Vivamus dapibus, ex vel cursus lacinia, risus quam egestas nulla, eget pharetra neque dolor eu justo. Nam vitae orci mollis, consectetur tortor at, dignissim massa. Pellentesque euismod purus nec ultricies dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum accumsan sapien, eu feugiat mauris gravida quis."
        linkText="Visit Starship"
        image="https://images.unsplash.com/photo-1604111950647-258e26897206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2668&q=80"
      />
    </div>
  );
}

export const getStaticProps = async() => {
  return {
    props: {}
  }
};

export default Career;
