import React from 'react';

import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import { routes } from '@/config/routes';
import { Heading } from '@/ui/atoms/Heading';
// import { theme } from '@/utils/theme';

import { SectionWrapper } from '../organisms/SectionWrapper';

export const Activity: React.FC = () => (
  <SectionWrapper>
    <Heading>アクティビティ</Heading>
    <div css={wrapper}>
      <div css={box}>
        <Link to={routes.activity1} css={boxLink}>
          <p>helo</p>
        </Link>
      </div>
      <div css={box} />
      <div css={box} />
    </div>
  </SectionWrapper>
);

const wrapper = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  height: '300px',
});

const box = css({
  // TODO: themeで色指定
  background: '#efefe8',
  cursor: 'pointer',
  width: 'calc((100% / 3) - 4px)',
  height: '90%',
  transition: '0.3s',
  ':hover': {
    transform: 'scale(1.02)',
  },
});

const boxLink = css({
  display: 'block',
  height: '100%',
  width: '100%',
});
