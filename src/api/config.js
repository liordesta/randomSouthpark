import { getRandomEpisode } from '../util/util';

const apiKey = process.env.REACT_APP_API_KEY;

export const episodeConfig = () => {
  getRandomEpisode();
  return {
    baseUrl: 'https://www.omdbapi.com/',
    apiKey: apiKey,
    endPoints: {
      episode: `?apikey=${apiKey}&t=south-park&${getRandomEpisode()}`,
    },
  };
};
