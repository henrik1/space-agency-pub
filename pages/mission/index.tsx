import type { NextPage } from 'next'
import { LaunchPad } from '../../lib/types';
import { getAllLaunchPads } from '../../lib/api';
import Container from '../../_components/Container/Container';
import List from '../../_components/List/List';
import BackgroundImage from '../../_components/BackgroundImage/BackgroundImage';
import { H1, H2 } from '../../_components/Typography/Typography';
import { InView } from 'react-intersection-observer';
import FadeInSlideUp from '../../_components/Animations/FadeInSlideUp';
import React from 'react';
import ArticleFeature from '../../_parts/ArticleFeature/ArticleFeature';
import ArticlePreview from '../../_parts/ArticlePreview/ArticlePreview';
import { Alignment } from '../../_parts/ArticleFeature/ArticleFeature.styles';

interface LanchesProps {
  pads: LaunchPad[]
}

const Launches: NextPage<LanchesProps> = ({ pads }: LanchesProps) => {
  return (
    <div style={{ paddingTop: 0, margin: 0 }}>
      <BackgroundImage
        style={{ justifyContent: 'center' }}
        src="https://images.unsplash.com/photo-1534996858221-380b92700493?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3431&q=80"
      >
        <Container style={{ marginTop: '8rem' }}>
          <InView threshold={0.5}>
            {({ ref, inView }: any) => (
              <div ref={ref}>
                <FadeInSlideUp visible={inView}>
                  <H1 variant="h3" style={{ paddingBottom: '10rem', maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
                    {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl nec risus porta 
                    efficitur id at risus. Vestibulum semper id tellus non blandit. Vivamus dapibus, ex vel 
                    cursus lacinia, risus quam egestas nulla, eget pharetra neque dolor eu justo. Nam vitae orci 
                    mollis, consectetur tortor at, dignissim massa. Pellentesque euismod purus nec ultricies dictum."`}
                    <br/>
                    <br/>
                    - John Doe
                  </H1>
                </FadeInSlideUp>
              </div>
            )}
          </InView>

        </Container>
      </BackgroundImage>

      <ArticleFeature
        title="We're putting a man on the moon"
        synopsis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl nec risus porta efficitur id at risus. Vestibulum semper id tellus non blandit. Vivamus dapibus, ex vel cursus lacinia, risus quam egestas nulla, eget pharetra neque dolor eu justo. Nam vitae orci mollis, consectetur tortor at, dignissim massa. Pellentesque euismod purus nec ultricies dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum accumsan sapien, eu feugiat mauris gravida quis."
        linkText="Read more"
        image="https://images.unsplash.com/photo-1616466610656-9b938fa7c077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80"
      />

      <ArticleFeature
        title="We're making history"
        synopsis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl nec risus porta efficitur id at risus. Vestibulum semper id tellus non blandit. Vivamus dapibus, ex vel cursus lacinia, risus quam egestas nulla, eget pharetra neque dolor eu justo. Nam vitae orci mollis, consectetur tortor at, dignissim massa. Pellentesque euismod purus nec ultricies dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum accumsan sapien, eu feugiat mauris gravida quis."
        linkText="Read more"
        image="https://images.unsplash.com/photo-1604112043688-588981772f37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2668&q=80"
      />

      <ArticleFeature
        inlineImage
        alignment={Alignment.rtl}
        title="One small step for mankind"
        synopsis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl nec risus porta efficitur id at risus. Vestibulum semper id tellus non blandit. Vivamus dapibus, ex vel cursus lacinia, risus quam egestas nulla, eget pharetra neque dolor eu justo. Nam vitae orci mollis, consectetur tortor at, dignissim massa. Pellentesque euismod purus nec ultricies dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum accumsan sapien, eu feugiat mauris gravida quis."
        linkText="Read more"
        image="https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
      />

      <Container style={{ marginTop: '8rem' }}>
        <H2 variant="h1" style={{ marginBottom: '8rem', textAlign: 'center' }}>Launch facilities</H2>
        <List>
          {pads.map((pad, idx) => (
            <li key={pad.id}>
              <ArticlePreview
                idx={idx}
                title={pad.name}
                image={pad.image}
                synopsis={pad.details || undefined}
                overline="May 20, 2022"
              />
            </li>
          ))}
        </List>
      </Container>
    </div>
  );
}

export const getStaticProps = async() => {
  const pads = await getAllLaunchPads();
  return {
    props: {
      pads
    }
  }
};

export default Launches;
