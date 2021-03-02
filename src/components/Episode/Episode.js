import React from 'react';

import './episode.css';

function Episode(props) {
  return (
    <div className='wrapper'>
      <div className='title'>
        Season: <span>{props.season}</span> - Episode:{' '}
        <span>{props.episode}</span>
      </div>
      <div className='episode'>
        <div className='episode-img'>
          <div className='episode_image'>
            <img src={props.poster} alt='Episode Poster' />
          </div>
        </div>

        <div className='episode-info'>
          <div className='episode_title'>
            Title:
            <br />
            <span>{props.title}</span>
          </div>

          <div className='episode_plot'>
            Plot:
            <br />
            <span>{props.plot}</span>
          </div>

          <div className='episode_aired'>
            Episode Aired:
            <br />
            <span>{props.released}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episode;
