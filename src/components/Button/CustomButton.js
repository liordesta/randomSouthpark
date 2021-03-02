import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'; // Hook that allows us to write CSS inside of the selected component

const styles = {
  root: {
    padding: '15px',
    borderRadius: '5px',
    borderWidth: '1px',
    margin: '0 auto',
    display: 'block',
    fontFamily: 'SouthPark',
    '& img': {
      paddingLeft: '5px',
    },
  },
  darkBtn: {
    backgroundColor: '#4f25f7',
    '&:hover': {
      backgroundColor: '#3311bb',
    },
  },
  lightBtn: {
    backgroundColor: '#f3a250',
    '&:hover': {
      backgroundColor: '#b96b1d',
    },
  },
  sdarot: {
    backgroundColor: '#95cc00',
    '&:hover': {
      backgroundColor: '#587702',
    },
  },
};

function CustomButton(props) {
  if (props.modeType === 'dark') {
    return (
      <Button
        classes={{ root: props.classes.root }}
        className={props.classes.darkBtn}
      >
        {props.children}
      </Button>
    );
  } else if (props.modeType === 'light') {
    return (
      <Button
        classes={{ root: props.classes.root }}
        className={props.classes.lightBtn}
      >
        {props.children}
      </Button>
    );
  } else {
    return (
      <Button
        classes={{ root: props.classes.root }}
        className={props.classes.sdarot}
      >
        {props.children}
      </Button>
    );
  }
}

export default withStyles(styles)(CustomButton);
