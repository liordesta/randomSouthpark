import React from 'react';

import './footer.css';

function Footer() {
  return (
    <span className='madeby'>
      Made by{' '}
      <a
        href='https://www.linkedin.com/in/liordesta'
        target='_blank'
        rel='noreferrer'
      >
        Lior Desta
      </a>
    </span>
  );
}

export default Footer;
