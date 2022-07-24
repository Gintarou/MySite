import React from 'react';

import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import Thumb1 from '@/assets/activity1thumb.png';
import Jesture from '@/assets/execution.png';
import { Heading } from '@/ui/atoms/Heading';
import { theme } from '@/utils/theme';

import { SubSectionWrapper } from '../organisms/SubSectionWrapper';

export const Activity: React.FC = () => (
  <SubSectionWrapper>
    <Heading>ツクッタモノ</Heading>
    <div css={wrapper}>
      <div css={boxWrapper}>
        <Link to="activity1" css={boxLink}>
          <img css={image} src={Thumb1} alt="ポートフォリオ" />
          <div css={textBox}>
            <p>ポートフォリオサイト</p>
            <p>React・TypeScript</p>
          </div>
        </Link>
      </div>
      <div css={boxWrapper}>
        <Link to="activity2" css={boxLink}>
          <img css={image} src={Jesture} alt="ポートフォリオ" />
          <div css={textBox}>
            <p>
              既存のWebサイトでジェスチャー操作が可能になるソフトウェアモジュール
            </p>
          </div>
        </Link>
      </div>
      <div css={boxWrapper}>
        <Link to="activity3" css={boxLink}>
          <img css={image} src={Thumb1} alt="ポートフォリオ" />
          <div css={textBox}>
            <p>Webカメラで物流管理を行うシステムのプロトタイプ作成</p>
          </div>
        </Link>
      </div>
    </div>
  </SubSectionWrapper>
);

const wrapper = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  height: '260px',
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

const textBox = css({
  padding: '0.7em 1em',
  p: {
    lineHeight: '1.5em',
  },
});
