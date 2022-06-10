import type { NextPage } from 'next'
import { Launch } from '../lib/types';
import { getAllLaunches } from '../lib/api';
import Container from '../_components/Container/Container';
import List from '../_components/List/List';
import BackgroundImage from '../_components/BackgroundImage/BackgroundImage';
import { H1, H3, Overline } from '../_components/Typography/Typography';
import { InView } from 'react-intersection-observer';
import FadeInSlideUp from '../_components/Animations/FadeInSlideUp';
import React from 'react';
import ArticleFeature from '../_parts/ArticleFeature/ArticleFeature';
import ArticlePreview from '../_parts/ArticlePreview/ArticlePreview';
import { Alignment } from '../_parts/ArticleFeature/ArticleFeature.styles';
import { Stat, StatGroup } from '../_parts/Stats/Stats';
import Count from '../_components/Count/Count';

interface LaunchesProps {
  launches: Launch[]
}

const Launches: NextPage<LaunchesProps> = ({ launches }: LaunchesProps) => {
  return (
    <div style={{ paddingTop: 0, margin: 0 }}>
      <BackgroundImage
        style={{ justifyContent: 'center' }}
        src="https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
      >
        <Container style={{ marginTop: '8rem' }}>
          <InView threshold={0.5}>
            {({ ref, inView }: any) => (
              <div ref={ref}>
                <FadeInSlideUp visible={inView}>
                  <H1 variant="h1" style={{ textAlign: 'center' }}>
                    Falcon 9
                  </H1>
                  <Overline component="h2" style={{ textAlign: 'center' }}>
                    First orbital rocket capable of reflight
                  </Overline>
                </FadeInSlideUp>
              </div>
            )}
          </InView>

        </Container>
      </BackgroundImage>

      <InView threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <Container>
              <StatGroup>
                <FadeInSlideUp visible={inView} delay={0.1} duration={1.2}>
                  <Stat value={<Count from={0} to={221} duration={5} show={inView} delay={0.1} />} title="Total Launches" />
                </FadeInSlideUp>
                <FadeInSlideUp visible={inView} delay={0.5} duration={1}>
                  <Stat value={<Count from={0} to={199} duration={4} show={inView} delay={0.2} />} title="Total Landings" />
                </FadeInSlideUp>
                <FadeInSlideUp visible={inView} delay={0.25} duration={1.1}>
                  <Stat value={<Count from={0} to={142} duration={3} show={inView} delay={0.15} />} title="Total Reflights" />
                </FadeInSlideUp>
              </StatGroup>
            </Container>
          </div>
        )}
      </InView>

      <ArticleFeature
        inlineImage
        alignment={Alignment.rtl}
        title="One small step for mankind"
        synopsis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl nec risus porta efficitur id at risus. Vestibulum semper id tellus non blandit. Vivamus dapibus, ex vel cursus lacinia, risus quam egestas nulla, eget pharetra neque dolor eu justo. Nam vitae orci mollis, consectetur tortor at, dignissim massa. Pellentesque euismod purus nec ultricies dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum accumsan sapien, eu feugiat mauris gravida quis."
        linkText="Read more"
        image="https://images.unsplash.com/photo-1517976547714-720226b864c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
      />

      <Container style={{ marginTop: '8rem' }}>
        <H3 variant="h1" style={{ marginBottom: '8rem', textAlign: 'center' }}>Recent launches</H3>
        <List>
          {launches.map((launch, idx) => (
            <li key={launch.id}>
              <ArticlePreview
                idx={idx}
                title={launch.mission_name}
                image={launch.image}
                overline="May 20, 2022"
                href={`/launches/${launch.id}`}
              />
            </li>
          ))}
        </List>
      </Container>
    </div>
  );
}

export const getStaticProps = async() => {
  const launches = await getAllLaunches();
  return {
    props: {
      launches
    }
  }
};


export default Launches;
