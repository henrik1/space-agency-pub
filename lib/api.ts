import { gql } from '@apollo/client';
import client from './apollo-client';
import { Launch } from './types';


const images = [
  'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1457364983758-510f8afa9f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1457364559154-aa2644600ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1516850228053-a807778c4e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1517976547714-720226b864c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
];

export const getAllLaunches = async (): Promise<Launch[]> =>
  client.query({
    query: gql`
      {
        launchesPast(limit: 10) {
          id
          mission_name
          details
        }
      }
    `,
  })
  .then(({ data: { launchesPast } }) => launchesPast)
  .then(launches => launches.map((launch: any, idx: number) => ({
    ...launch,
    image: images[idx % (images.length)]
  })));

export const getLaunch = async (id: string): Promise<Launch[]> =>
  client.query({
    query: gql`
      {
        launch(id: ${id}) {
          id
          mission_name
          details
        }
      }
    `,
  })
  .then(({ data: { launch } }) => launch)
  .then(launch => ({
    ...launch,
    image: images[Math.floor((Math.random()*10)) % (images.length)]
  }))
  .catch(console.log);

export const getAllLaunchPads = async (): Promise<Launch[]> =>
  client.query({
    query: gql`
      {
        launchpads {
          id
          details
          name
        }
      }
    `,
  })
  .then(({ data: { launchpads } }) => launchpads)
  .then(pads => pads.map((pad: any, idx: number) => ({
    ...pad,
    image: images[idx % (images.length)]
  })));
