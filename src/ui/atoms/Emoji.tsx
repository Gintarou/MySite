import React from 'react';

import { css } from '@emotion/react';

type Props = {
  image: string;
  alt: string;
};

export const Emoji: React.FC<Props> = ({ image, alt }) => (
  <img src={image} alt={alt} css={imageStyle} />
);

const imageStyle = css({
  display: 'inline-block',
  height: '1em',
  paddingLeft: '0.2em',
  verticalAlign: 'middle',
});
