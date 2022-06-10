import type { NextPage } from 'next'
import { Launch } from '../lib/types';
import { getAllLaunches } from '../lib/api';
import ArticleFeature from '../_parts/ArticleFeature/ArticleFeature';
import { Alignment, Variant } from '../_parts/ArticleFeature/ArticleFeature.styles';

interface LandingProps {
  launches: Launch[]
}

const Home: NextPage<LandingProps> = ({ launches, ...rest }: LandingProps) => {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <ul style={{ padding: 0, margin: 0 }}>
        {launches.map(launch => (
          <ArticleFeature
            overline="Recent launch"
            key={launch.id}
            title={launch.mission_name}
            image={launch.image}
            variant={Variant.bottom}
            alignment={Alignment.ltr}
            linkText="Rewatch"
            href={`/launches/${launch.id}`}
          />
        ))}
      </ul>
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

export default Home;
