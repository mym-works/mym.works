import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

import mymFace from './img/mym_face.png';

const useStyles = makeStyles((theme) => ({
  faceimageDesktop: {
    marginTop: '10vmin',
    marginLeft: '5vmin',
  },
  faceimageMobile: {
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
    fontSize: 'calc(10px + 1vmin)',
    whiteSpace: 'pre-wrap',
    marginTop: '-30vmin',
    marginLeft: '50vmin',
  },
  commentMobile: {
    fontSize: 'calc(10px + 1vmin)',
    whiteSpace: 'pre-wrap',
    marginTop: '10vmin',
    marginLeft: '10vmin',
    marginRight: '5vmin',
    textAlign: 'left',
  },
  blankSpace: {
    marginBottom: '30vmin',
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

export default function About() {
  const classes = useStyles();

  const title = 'About_';
  const summary = 'こんにちは，mym（mayama）と言います．';
  const sentence =
    '仕事と開発活動の拠点は東京です．🗼\n主にインフラストラクチャーとバックエンドの領域で生きてます．🧑‍💻\n人々がより幸せな生活を送るためのスクリプトやサービスを創ることに情熱を持っています．🔥\n私のポリシーとして自動化の推進をしております．\n作業の自動化は人々の仕事を奪うのではなく，\nよりクリエイティブな事をするために必要なことだと考えています．';

  return (
    <div className={classes.grow}>
      <div className={classes.sectionDesktop}>
        <div class={classes.borderDesktop}>
          <div className={classes.titleDesktop}>
            <h1>{title}</h1>
            <div className={classes.faceimageDesktop}>
              <img src={mymFace} width='auto' height='250vmin' alt='' />
            </div>
          </div>
          <div className={classes.commentDesktop}>
            <h3>{summary}</h3>
            <p>{sentence}</p>
          </div>
        </div>
      </div>

      <div className={classes.sectionMobile}>
        <div class={classes.borderMobile}>
          <div className={classes.titleMobile}>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
      <div className={classes.sectionMobile}>
        <div className={classes.faceimageMobile}>
          <img src={mymFace} width='auto' height='250vmin' alt='' />
        </div>
      </div>
      <div className={classes.sectionMobile}>
        <div className={classes.commentMobile}>
          <h3>{summary}</h3>
          <p>{sentence}</p>
        </div>
      </div>
      <div className={classes.blankSpace}></div>
    </div>
  );
}
