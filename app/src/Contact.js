import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import facebooklogoUrl from './img/facebook_logo.png';
import githublogoUrl from './img/github_logo.png';
import linkedinlogoUrl from './img/linkedin_logo.png';

const useStyles = makeStyles((theme) => ({
  socialimageDesktop: {
    marginTop: '10vmin',
    marginLeft: '10vmin',
  },
  socialimageMobile: {
    margin: 'auto',
    marginTop: '10vmin',
  },
  borderDesktop: {
    borderLeft: 'thick solid #036ED7',
    borderWidth: '20px',
    marginLeft: '20vmin',
  },
  borderMobile: {
    borderLeft: 'thick solid #036ED7',
    borderWidth: '20px',
    marginLeft: '5vmin',
  },
  titleDesktop: {
    fontSize: 'calc(18px + 1vmin)',
    marginLeft: '10vmin',
  },
  titleMobile: {
    fontSize: 'calc(15px + 1vmin)',
    marginLeft: '10vmin',
  },
  emailDesktop: {
    fontSize: 'calc(15px + 1vmin)',
    marginLeft: '20vmin',
    marginBottom: '10vmin',
  },
  emailMobile: {
    fontSize: 'calc(13px + 1vmin)',
    marginTop: '5vmin',
    margin: 'auto',
    marginBottom: '10vmin',
  },
  blankSpace: {
    marginBottom: '20vmin',
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Contact() {
  const classes = useStyles();

  const title = 'Contact_';
  const email = 'mym.kohei(at)gmail.com';

  return (
    <div className={classes.grow}>
      <div className={classes.sectionDesktop}>
        <div class={classes.borderDesktop}>
          <div className={classes.titleDesktop}>
            <h1>{title}</h1>
            <div className={classes.socialimageDesktop}>
              <IconButton aria-label='facebook' color='inherit'>
                <a href='https://www.facebook.com/kohei.mayama'>
                  <img
                    src={facebooklogoUrl}
                    width='auto'
                    height='50vmin'
                    alt=''
                  />
                </a>
              </IconButton>
              <IconButton aria-label='github' color='inherit'>
                <a href='https://github.com/mym-kingbob'>
                  <img
                    src={githublogoUrl}
                    width='auto'
                    height='50vmin'
                    alt=''
                  />
                </a>
              </IconButton>
              <IconButton aria-label='linkedin' color='inherit'>
                <a href='https://www.linkedin.com/in/kohei-mayama'>
                  <img
                    src={linkedinlogoUrl}
                    width='auto'
                    height='50vmin'
                    alt=''
                  />
                </a>
              </IconButton>
            </div>
          </div>
          <div className={classes.emailDesktop}>
            <h2>{email}</h2>
          </div>
        </div>
      </div>

      <div className={classes.sectionMobile}>
        <div className={classes.borderMobile}>
          <div className={classes.titleMobile}>
            <h1>{title}</h1>
          </div>
        </div>
      </div>

      <div className={classes.sectionMobile}>
        <div className={classes.socialimageMobile}>
          <IconButton aria-label='facebook' color='inherit'>
            <a href='https://www.facebook.com/kohei.mayama'>
              <img src={facebooklogoUrl} width='auto' height='50vmin' alt='' />
            </a>
          </IconButton>
          <IconButton aria-label='github' color='inherit'>
            <a href='https://github.com/mym-kingbob'>
              <img src={githublogoUrl} width='auto' height='50vmin' alt='' />
            </a>
          </IconButton>
          <IconButton aria-label='linkedin' color='inherit'>
            <a href='https://www.linkedin.com/in/kohei-mayama'>
              <img src={linkedinlogoUrl} width='auto' height='50vmin' alt='' />
            </a>
          </IconButton>
        </div>
      </div>

      <div className={classes.sectionMobile}>
        <div className={classes.emailMobile}>
          <h2>{email}</h2>
        </div>
      </div>

      <div className={classes.blankSpace}></div>
    </div>
  );
}
