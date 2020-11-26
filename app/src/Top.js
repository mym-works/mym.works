import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

import mymlogoUrl from './img/mym_logo.png';

const useStyles = makeStyles((theme) => ({
  topimage: {
    margin: '20vmin',
  },
  title: {
    fontSize: 'calc(10px + 1vmin)',
    color: '#036ED7',
    textAlign: 'center',
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    justifyContent: 'center',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    justifyContent: 'center',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Top() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <div className={classes.sectionDesktop}>
        <div className={classes.topimage}>
          <img src={mymlogoUrl} width='auto' height='200vmin' alt='' />
          <div className={classes.title}>
            <h1>Backend</h1>
            <h1>&</h1>
            <h1>Infrastructure</h1>
          </div>
        </div>
      </div>

      <div className={classes.sectionMobile}>
        <div className={classes.topimage}>
          <img src={mymlogoUrl} width='auto' height='170vmin' alt='' />
          <div className={classes.title}>
            <h1>Backend</h1>
            <h1>&</h1>
            <h1>Infrastructure</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
