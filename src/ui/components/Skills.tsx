import React from 'react';

import { css } from '@emotion/react';

import { Heading } from '@/ui/atoms/Heading';
import { theme } from '@/utils/theme';

import { SubSectionWrapper } from '../organisms/SubSectionWrapper';

export const Skills: React.FC = () => (
  <SubSectionWrapper>
    <Heading>デキルコト・ヤリタイコト</Heading>
    <p>React / TypeScript / Python / Ruby / etc...</p>
    <p>
      Webに関しては、以前まではRailsでWebアプリを作っていましたが、最近はCSSinJSなどに魅了されてReactばかり触っています。
    </p>
    <p>
      また、Pythonをつかって機械学習に関する研究をしているので、そういった関連のライブラリなども扱うことができます。
    </p>
    <p>
      最近はクリエイティブなことがしたくてイラスト(Procreate)、音楽(Logic
      Pro)、3D系(Blender)などいろいろなことを勉強しています。
    </p>
    <p css={tmpNote}>&#x203b;現在修正中</p>
  </SubSectionWrapper>
);

const tmpNote = css({
  color: theme.colors.primary,
});
