import { getRandomEpisode } from '../util/util';

const apiKey = '2fe8764a';

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
