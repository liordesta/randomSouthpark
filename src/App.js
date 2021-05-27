import React from 'react';

import {
  ThemeProvider,
  createMuiTheme,
  CssBaseline,
  makeStyles,
} from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

import { getEpisode } from './api/action';
import CustomButton from './components/Button/CustomButton';
import Episode from './components/Episode/Episode';
import Footer from './components/Footer/Footer';
import kyle from './assets/images/kyle.png';
import stan from './assets/images/stan.png';
import logo from './assets/images/logo.png';

import './App.css';

function App() {
  const [episode, setEpisode] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(true);

  const setTheme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  const styles = makeStyles({
    whiteLogo: {
      filter: 'invert(1)',
    },
  });

  const classes = styles();

  const handleDarkMode = () => {
    if (darkMode) {
      return <WbSunnyIcon onClick={() => setDarkMode(false)} />;
    } else {
      return <Brightness2Icon onClick={() => setDarkMode(true)} />;
    }
  };

  const handleGenerateBtn = () => {
    getEpisode()
      .then((res) => {
        setEpisode(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleWatchBtn = () => {
    const episodeURL = `https://sdarot.life/watch/76-%D7%A1%D7%90%D7%95%D7%AA-%D7%A4%D7%90%D7%A8%D7%A7-south-park/season/${episode.Season}/episode/${episode.Episode}`;
    window.open(episodeURL, 'Episode_WindowName');
  };

  return (
    <div className='App'>
      <ThemeProvider theme={setTheme}>
        <CssBaseline />
        <div className='header'>
          <div className='logo'>
            <img
              src={logo}
              alt='logo'
              className={darkMode ? classes.whiteLogo : ''}
            />
          </div>
          <div className='setDarkMode'>{handleDarkMode()}</div>
        </div>

        {episode && (
          <Episode
            season={episode.Season}
            episode={episode.Episode}
            title={episode.Title}
            plot={episode.Plot}
            poster={episode.Poster}
            released={episode.Released}
          />
        )}

        <div className='generate'>
          <div>
            <CustomButton
              onClick={() => {
                handleGenerateBtn();
              }}
              modeType={darkMode ? 'dark' : 'light'}
            >
              Generate Random Episode
              <img src={kyle} alt='kyle' />
            </CustomButton>
          </div>
          {episode && (
            <>
              <div>
                <CustomButton
                  modeType={'sdarot'}
                  onClick={() => {
                    handleWatchBtn();
                  }}
                >
                  Watch Episode
                  <img src={stan} alt='stan' />
                </CustomButton>
              </div>
              <Footer />
            </>
          )}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
