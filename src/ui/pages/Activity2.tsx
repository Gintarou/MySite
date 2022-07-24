import React from 'react';

import { css } from '@emotion/react';

import MainImage from '@/assets/execution.png';
import { Wrapper } from '@/ui/organisms/MotionWrapper';

import { Heading } from '../atoms/Heading';
import { SubSectionWrapper } from '../organisms/SubSectionWrapper';

export const Activity2: React.FC = () => (
  <Wrapper>
    <SubSectionWrapper>
      <Heading>
        既存のWebサイトでジェスチャー操作が可能になる
        <br />
        ソフトウェアモジュール
      </Heading>
      <img css={mainImage} src={MainImage} alt="ポートフォリオの画像" />
      <div css={textWrapper}>
        <div css={infoTextWrapper}>
          <div css={infoTextBlock}>
            <p css={infoHeading}>学部での卒業研究として開発</p>
          </div>
          <div css={infoTextBlock}>
            <p css={infoHeading}>使用言語</p>
            <p css={infoText}>Python / JavaScript</p>
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
        </div>
        <div css={detailText}>
          <p>
            近年蔓延している新型コロナウイルスの問題を受け、既存のWeb環境下で非接触操作ができる、ソフトウェアモジュールの開発を行いました。
          </p>
          <p>
            画像のように、Webカメラさえあればハンドジェスチャーで操作が可能になります。
          </p>
        </div>
      </div>
    </SubSectionWrapper>
  </Wrapper>
);

const mainImage = css({
  borderRadius: '10px',
  boxShadow: '2px 3px 10px #999999',
  maxHeight: '400px',
  objectFit: 'cover',
  width: '100%',
});

const textWrapper = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: '50px',
});

const infoTextWrapper = css({
  width: '26%',
  '*': {
    lineHeight: '1.5em',
  },
});

const infoTextBlock = css({
  marginBottom: '20px',
});

const detailText = css({
  width: '60%',
});

const infoHeading = css({
  fontWeight: 'bold',
});

const infoText = css({
  fontSize: '0.9em',
});
