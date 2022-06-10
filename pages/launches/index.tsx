import type { NextPage } from 'next'
import { Launch } from '../../lib/types';
import { getAllLaunches } from '../../lib/api';
import Container from '../../_components/Container/Container';
import List from '../../_components/List/List';
import ArticleFeature from '../../_parts/ArticleFeature/ArticleFeature';
import { Alignment, Variant } from '../../_parts/ArticleFeature/ArticleFeature.styles';
import ArticlePreview from '../../_parts/ArticlePreview/ArticlePreview';
import { InView } from 'react-intersection-observer';
import FadeInSlideUp from '../../_components/Animations/FadeInSlideUp';
import { Stat, StatGroup } from '../../_parts/Stats/Stats';
import Count from '../../_components/Count/Count';

interface LaunchesProps {
  launches: Launch[]
}

const Launches: NextPage<LaunchesProps> = ({ launches: [head, ...tail] }: LaunchesProps) => {
  return (
    <div style={{ paddingTop: 0, margin: 0 }}>
      {head && (
        <ArticleFeature
          title={head.mission_name}
          href={`/launches/${head.id}`}
          image={head.image}
          overline="Recent launch"
          variant={Variant.bottom}
          alignment={Alignment.ltr}
          linkText="Rewatch"
        />
      )}

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

      <Container style={{ marginTop: '8rem' }}>
        <List>
          {tail.map((launch, idx) => (
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
