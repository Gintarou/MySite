import React from 'react';

import { css } from '@emotion/react';

import { Heading } from '@/ui/atoms/Heading';
import { theme } from '@/utils/theme';

import { SectionWrapper } from '../organisms/SectionWrapper';

export const Skills: React.FC = () => (
  <SectionWrapper>
    <Heading>デキルコト・ヤリタイコト</Heading>
    <p>React / TypeScript / Python / Ruby / etc...</p>
    <p>Web開発に関する知識を中心として、色々なことを生んできました。</p>
    <p>
      研究を通じて機械学習にも触れているので、それに関連したライブラリも使えます。
    </p>
    <p>
      最近はクリエイティブなことがしたくてイラスト(Procreate)、音楽(Logic
      Pro)、3D系(Blender)などいろいろなことを勉強しています。
    </p>
    <p css={tmpNote}>
      &#x203b;もう少しわかりやすくお伝えできるよう、現在修正中です
    </p>
  </SectionWrapper>
);

const tmpNote = css({
  color: theme.colors.primary,
});
