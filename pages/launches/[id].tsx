import type { NextPage } from 'next'
import { Launch } from '../../lib/types';
import { getAllLaunches, getLaunch } from '../../lib/api';
import Container from '../../_components/Container/Container';
import List from '../../_components/List/List';
import ArticlePreview from '../../_parts/ArticlePreview/ArticlePreview';
import React from 'react';
import { H2 } from '../../_components/Typography/Typography';
import Article from '../../_parts/Article/Article';

interface LanchesProps {
  launches: Launch[];
  launch: Launch;
}

const Launches: NextPage<LanchesProps> = ({ launches, launch }: LanchesProps) => {

  return (
    <div style={{ paddingTop: 0, margin: 0 }}>
      {launch && (
        <Article
          title={launch.mission_name}
          image={launch.image}
          overline="Recent launch"
          synopsis={launch.details}
        />
      )}

      <Container style={{ marginTop: '8rem' }}>
        <H2>Other launches</H2>
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

export const getStaticProps = async({ params: { id } }: any) => {
  const launches = await getAllLaunches();
  const launch = await getLaunch(id);
  return {
    props: {
      launches,
      launch
    }
  }
};

export const getStaticPaths = async() => {
  const launches = await getAllLaunches();
  return {
    paths: launches.map(launch => ({
      params: { id: launch.id },
    })),
    fallback: false
  }
};

export default Launches;
