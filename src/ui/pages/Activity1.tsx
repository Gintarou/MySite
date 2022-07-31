import React, { useEffect } from 'react';

import { css } from '@emotion/react';

import WindowImage from '@/assets/activity1window.png';
import { Wrapper } from '@/ui/organisms/MotionWrapper';

import { Heading } from '../atoms/Heading';
import { SubSectionWrapper } from '../organisms/SubSectionWrapper';

export const Activity1: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <SubSectionWrapper>
        <Heading>オザワリクトのポートフォリオ</Heading>
        <img css={mainImage} src={WindowImage} alt="ポートフォリオの画像" />
        <div css={textWrapper}>
          <div css={infoTextWrapper}>
            {/* <div css={infoTextBlock}>
            <p css={infoHeading}>制作期間</p>
            <p css={infoText}>1.5日</p>
          </div> */}
            <div css={infoTextBlock}>
              <p css={infoHeading}>使用言語</p>
              <p css={infoText}>React / TypeScript</p>
            </div>
            <div css={infoTextBlock}>
              <p css={infoHeading}>URL</p>
              <p css={infoText}>
                <a
                  href="https://www.oit.ac.jp/rd/labs/kobayashi-lab/~ozawa/"
                  target="_black"
                  rel="noopener"
                >
                  https://www.oit.ac.jp/rd/labs/kobayashi-lab/~ozawa/
                </a>
              </p>
            </div>
            <div css={infoTextBlock}>
              <p css={infoHeading}>Git</p>
              <p css={infoText}>
                <a
                  href="https://github.com/Gintarou/MySite"
                  target="_black"
                  rel="noopener"
                >
                  https://github.com/Gintarou/MySite
                </a>
              </p>
            </div>
          </div>
          <div css={detailText}>
            <p>僕自身のポートフォリオサイトの作成。</p>
            <p>Create React Appを使ってフルスクラッチで作成しました。</p>
            <p>
              画面遷移はframer-motionを使っていて、現在もデザインを含め、色々と改修・追加中です。
            </p>
          </div>
        </div>
      </SubSectionWrapper>
    </Wrapper>
  );
};

const mainImage = css({
  height: 'auto',
  objectFit: 'contain',
  width: '100%',
});

const textWrapper = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: '50px',
});

const infoTextWrapper = css({
  width: '100%',
  '*': {
    lineHeight: '1.5em',
  },
  '@media (min-width: 850px)': {
    width: '26%',
  },
});

const infoTextBlock = css({
  marginBottom: '20px',
});

const detailText = css({
  width: '100%',
  '@media (min-width: 850px)': {
    width: '60%',
  },
});

const infoHeading = css({
  fontWeight: 'bold',
});

const infoText = css({
  fontSize: '0.9em',
});
