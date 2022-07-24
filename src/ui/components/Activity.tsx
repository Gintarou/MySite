import React from 'react';

import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import Thumb1 from '@/assets/activity1thumb.png';
import { Heading } from '@/ui/atoms/Heading';
import { theme } from '@/utils/theme';

import { SubSectionWrapper } from '../organisms/SubSectionWrapper';

export const Activity: React.FC = () => (
  <SubSectionWrapper>
    <Heading>アクティビティ</Heading>
    <div css={wrapper}>
      <div css={boxWrapper}>
        <Link to="activity1" css={boxLink}>
          <img css={image} src={Thumb1} alt="ポートフォリオ" />
          <p>オザワリクトのポートフォリオ</p>
        </Link>
      </div>
      <div css={boxWrapper}>
        <Link to="activity1" css={boxLink}>
          <img css={image} src={Thumb1} alt="ポートフォリオ" />
          <p>オザワリクトのポートフォリオ</p>
        </Link>
      </div>
      <div css={boxWrapper}>
        <Link to="activity1" css={boxLink}>
          <img css={image} src={Thumb1} alt="ポートフォリオ" />
          <p>オザワリクトのポートフォリオ</p>
        </Link>
      </div>
    </div>
  </SubSectionWrapper>
);

const wrapper = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  height: '270px',
});

const boxWrapper = css({
  background: theme.colors.black,
  cursor: 'pointer',
  height: '90%',
  position: 'relative',
  width: 'calc((100% / 3) - 6px)',
});

const boxLink = css({
  color: theme.colors.black,
  display: 'block',
  height: '100%',
  textDecoration: 'none',
  width: '100%',
  // TODO: themeで色指定
  background: '#efefe8',
  position: 'absolute',
  transition: '0.3s',
  ':hover': {
    transform: 'translate(-4px, -4px)',
  },
});

const image = css({
  width: '100%',
  height: '60%',
  objectFit: 'cover',
});
