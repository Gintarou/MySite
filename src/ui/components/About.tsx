import React from 'react';

import { Heading } from '@/ui/atoms/Heading';

import { SectionWrapper } from '../organisms/SectionWrapper';

export const About: React.FC = () => (
  <SectionWrapper>
    <Heading>オザワリクト</Heading>
    <p>はじめまして。大学院修士１年のおざわです。</p>
    <p>
      大学に入学してパソコンに触り始めたと同時にプログラミングの勉強を始めました。現在は主にWeb開発と機械学習に関する研究を行っています。
    </p>
    <p>ちなみに、勉強はすべて独学です。</p>
  </SectionWrapper>
);
