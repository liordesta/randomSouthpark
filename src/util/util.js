export const seasonEpisodes = {
  1: 13,
  2: 18,
  3: 17,
  4: 17,
  5: 14,
  6: 17,
  7: 15,
  8: 14,
  9: 14,
  10: 14,
  11: 14,
  12: 14,
  13: 14,
  14: 14,
  15: 14,
  16: 14,
  17: 10,
  18: 10,
  19: 10,
  20: 10,
  21: 10,
  22: 10,
  23: 10,
  24: 1,
};

export const getRandomSeason = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomEpisode = () => {
  const randomSeason = getRandomSeason(1, 24);
  let episodesPerSeason;
  for (let key in seasonEpisodes) {
    if (key === randomSeason.toString()) {
      episodesPerSeason = seasonEpisodes[key];
      break;
    }
  }
  const randomEpisode = getRandomSeason(1, episodesPerSeason);

  return `season=${randomSeason}&episode=${randomEpisode}`;
};
