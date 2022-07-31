import React, { useEffect } from 'react';

import { css } from '@emotion/react';

import NoImage from '@/assets/noimage.gif';
import { Wrapper } from '@/ui/organisms/MotionWrapper';

import { Heading } from '../atoms/Heading';
import { SubSectionWrapper } from '../organisms/SubSectionWrapper';

export const Activity3: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <SubSectionWrapper>
        <Heading>Webカメラで物流管理を行うシステムのプロトタイプ作成</Heading>
        <img css={mainImage} src={NoImage} alt="ポートフォリオの画像" />
        <div css={textWrapper}>
          <div css={infoTextWrapper}>
            <div css={infoTextBlock}>
              <p css={infoHeading}>制作期間</p>
              <p css={infoText}>2021年6月~7月</p>
            </div>
            <div css={infoTextBlock}>
              <p css={infoHeading}>使用言語</p>
              <p css={infoText}>Python(Flask) / JavaScript</p>
            </div>
          </div>
          <div css={detailText}>
            <p>
              企業様からいただいた課題で、
              段ボールなどの物体にARマーカーを貼り付けて、それをWebカメラで撮影して倉庫内の物流を管理するシステムのプロトタイプの作成に関わらせていただきました。
            </p>
            <p>
              撮影した映像を
              <a
                href="https://docs.opencv.org/3.4/d9/d6a/group__aruco.html"
                target="_blank"
                rel="noreferrer"
              >
                ArUco
              </a>
              というライブラリを中心に画像処理を行うことで、ブラウザ上で簡単に物流管理ができるようになります。
            </p>
          </div>
        </div>
      </SubSectionWrapper>
    </Wrapper>
  );
};

const mainImage = css({
  maxHeight: '300px',
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
