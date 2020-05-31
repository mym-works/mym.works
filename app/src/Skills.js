import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from './tileData';

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
  subtitleDesktop: {
    fontSize: 'calc(12px + 1vmin)',
    marginLeft: '20vmin',
  },
  titleMobile: {
    fontSize: 'calc(15px + 1vmin)',
    marginLeft: '10vmin',
  },
  subtitleMobile: {
    fontSize: 'calc(10px + 1vmin)',
    marginLeft: '20vmin',
  },
  root: {
    marginLeft: '20vmin',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    border: 'thin #ff0000 solid',
    flexWrap: 'nowrap',
  },
  title: {
    color: '#FFFFFF',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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

export default function Skills() {
  const classes = useStyles();

  const title = 'Skills_';
  const subtitle_cloud = 'Cloud Services';
  const subtitle_language = 'Languages';

  return (
    <div className={classes.grow}>
      <div className={classes.sectionDesktop}>
        <div class={classes.borderDesktop}>
          <div className={classes.titleDesktop}>
            <h1>{title}</h1>
          </div>

          <div className={classes.subtitleDesktop}>
            <h2>{subtitle_cloud}</h2>
          </div>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>

          <div className={classes.subtitleDesktop}>
            <h2>{subtitle_language}</h2>
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
        <div className={classes.subtitleMobile}>
          <h2>{subtitle_cloud}</h2>
        </div>
      </div>

      <div className={classes.sectionMobile}>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={1.5}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>

      <div className={classes.blankSpace}></div>
    </div>
  );
}
