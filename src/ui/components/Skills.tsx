import React from 'react';

import { css } from '@emotion/react';

import { Heading } from '@/ui/atoms/Heading';
import { theme } from '@/utils/theme';

import { SectionWrapper } from '../organisms/SectionWrapper';

export const Skills: React.FC = () => (
  <SectionWrapper>
    <Heading>デキルコト・ヤリタイコト</Heading>
    <p>React / TypeScript / Python / Ruby / etc...</p>
    <p>
      以前まではRailsでWebアプリを作っていましたが、最近はCSSinJSなどに魅了されてReactばかり触っています。
    </p>
    <p>また、機械学習に関することをPythonをつかった</p>
    <p>
      最近はクリエイティブなことがしたくてイラスト(Procreate)、音楽(Logic
      Pro)、3D系(Blender)などいろいろなことを勉強しています。
    </p>
    <p css={tmpNote}>&#x203b;現在修正中</p>
  </SectionWrapper>
);

const tmpNote = css({
  color: theme.colors.primary,
});
