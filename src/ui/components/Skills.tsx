import React from 'react';

import { Heading } from '@/ui/atoms/Heading';

import { SubSectionWrapper } from '../organisms/SubSectionWrapper';

export const Skills: React.FC = () => (
  <SubSectionWrapper>
    <Heading>デキルコト・ヤリタイコト</Heading>
    <p>React / TypeScript / Python / Ruby / etc...</p>
    <p>
      Webに関しては、以前まではRailsでWebアプリを作っていましたが、現在はCSSinJSなどに魅了されてReactばかり触っています。
    </p>
    <p>
      また、Pythonをつかって機械学習に関する研究をしているので、そういった関連のライブラリなども扱うことができます。
    </p>
    <p>
      最近はクリエイティブなことがしたくてイラスト(Procreate)、音楽(Logic
      Pro)、3D系(Blender)などいろいろなことを勉強しています。
    </p>
  </SubSectionWrapper>
);
