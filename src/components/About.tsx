import React from 'react';

import { css } from '@emotion/react';

import Leaf from '@/assets/leaf.png';
import Face from '@/assets/myFace.jpeg';
import EmojiFace from '@/assets/reverseFace.png';
import { Emoji } from '@/ui/atoms/Emoji';
import { theme } from '@/utils/theme';

const bio = [
  {
    year: '1999',
    content: '誕生',
  },
  {
    year: '2018',
    content: '大阪府立三島高等学校卒業',
  },
  {
    year: '2018',
    content: '大学入学をきっかけにPCを手に入れる & プログラミングの勉強を始める',
  },
  {
    year: '2022',
    content:
      '大阪工業大学 ロボティクス&デザイン工学部 システムデザイン工学科 学士過程 卒業',
  },
  {
    year: 'present',
    content:
      '大阪工業大学 ロボティクス&デザイン工学専攻 システムデザインコース 修士課程 在学中',
  },
];

export const About: React.FC = () => (
  <section css={wrapper}>
    <div css={textBlock}>
      <p>
        デジタルなモノづくりを通じていろんな人に感動を与えるを目標に、毎日勉強の日々をすごしています。
        <Emoji image={Leaf} alt="🌱" />
      </p>
      <p>
        2018年に大学に入学してパソコンに触り始めたと同時にプログラミングの勉強を始めました。現在は主にWeb開発と機械学習に関する研究を行っています。
        <Emoji image={EmojiFace} alt="🙃" />
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
});

const textBlock = css({
  margin: '0 auto ',
  maxWidth: '800px',
  width: '80%',
  'p, h2': {
    fontSize: theme.fontSizes.phone,
    '@media (min-width: 600px)': {
      fontSize: theme.fontSizes.tablet,
    },
    '@media (min-width: 1025px)': {
      fontSize: theme.fontSizes.pc,
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
    fontSize: '1.5em',
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
