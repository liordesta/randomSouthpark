import axios from 'axios';
import { episodeConfig } from './config';

export const getEpisode = () => {
  const {
    endPoints: { episode },
    baseUrl,
  } = episodeConfig();
  return axios({
    url: episode,
    baseURL: baseUrl,
    method: 'GET',
  });
};
