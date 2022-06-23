import React from 'react';

import { css } from '@emotion/react';

import Leaf from '@/assets/leaf.png';
import Face from '@/assets/myFace.jpeg';
import { Emoji } from '@/ui/atoms/Emoji';
import { theme } from '@/utils/theme';

const bio = [
  {
    year: '1999',
    content: 'Born in Osaka, Japan',
  },
  {
    year: '2018',
    content: 'Got PC, Macbook Air',
  },
  {
    year: '2022',
    content:
      'Completed the Bachelor of System Design Engineering, Faculty of Robotics & Design Engineering at Osaka Institute of Technology(大阪工業大学 ロボティクス&デザイン工学部 システムデザイン工学科 学士過程 卒業)',
  },
  {
    year: 'present',
    content:
      'Doing the Master of System Design Engineering, Faculty of Robotics & Design Engineering at Osaka Institute of Technology(大阪工業大学 ロボティクス&デザイン工学専攻 システムデザインコース 修士課程 在学中)',
  },
];

export const About: React.FC = () => (
  <section css={wrapper}>
    <div css={textBlock}>
      <p>Hi, I&lsquo;m Rikuto.</p>
      <p>
        Dreaming of inspiring people with digital crafts, I&lsquo;m growing
        every day
        <Emoji image={Leaf} alt="🌱" />
      </p>
      <div css={bioWrapper}>
        <h2>Biography</h2>
        <div css={profileWrapper}>
          <img src={Face} alt="rikuto's face" css={face} />
          <div css={profileTextBlock}>
            <p>Rikuto Ozawa</p>
            <p>
              <span>小澤 陸人</span>
            </p>
          </div>
        </div>
        <div css={bioBlock}>
          {bio.map((c, i) => (
            <div key={i} css={bioRow}>
              <div css={year}>{c.year}</div>
              <div css={content}>{c.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const wrapper = css({
  background: theme.colors.white,
  padding: '100px 0 100px',
  '@media (min-width: 600px)': {
    padding: '150px 0 150px',
  },
  '@media (min-width: 1025px)': {
    padding: '200px 0 200px',
  },
});

const textBlock = css({
  margin: '0 auto ',
  maxWidth: '800px',
  width: '80%',
  'p, h2': {
    fontSize: '24px',
    '@media (min-width: 600px)': {
      fontSize: '26px',
    },
    '@media (min-width: 1025px)': {
      fontSize: '28px',
    },
  },
  p: {
    fontWeight: '400',
  },
  h2: {
    fontWeight: '700',
  },
});

const bioWrapper = css({
  padding: '50px 0 0',
  margin: '0 auto',
  h2: {
    color: '#555555',
  },
});

const profileWrapper = css({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 0',
});

const face = css({
  borderRadius: '50%',
  height: '100px',
  border: '3px solid #aaaaaa',
  marginRight: '50px',
});

const profileTextBlock = css({
  p: {
    margin: '0',
  },
  span: {
    fontFamily: 'M PLUS 1p',
    fontSize: '0.8em',
  },
});

const bioBlock = css({
  marginTop: '0',
});

const bioRow = css({
  alignItems: 'top',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  lineHeight: '1.4em',
  paddingBottom: '1em',
  '&:last-child': {
    paddingBottom: '0',
  },
});

const year = css({
  width: '80px',
});

const content = css({
  width: 'calc(100% - 80px)',
});
