import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

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
  commentDesktop: {
    fontSize: 'calc(15px + 1vmin)',
    marginLeft: '20vmin',
    marginBottom: '10vmin',
  },
  commentMobile: {
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

export default function Blog() {
  const classes = useStyles();

  const title = 'Blog_';
  const comment = 'Coming Soon...';

  return (
    <div className={classes.grow}>
      <div className={classes.sectionDesktop}>
        <div class={classes.borderDesktop}>
          <div className={classes.titleDesktop}>
            <h1>{title}</h1>
          </div>
          <div className={classes.commentDesktop}>
            <h2>{comment}</h2>
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
        <div className={classes.commentMobile}>
          <h2>{comment}</h2>
        </div>
      </div>

      <div className={classes.blankSpace}></div>
    </div>
  );
}
