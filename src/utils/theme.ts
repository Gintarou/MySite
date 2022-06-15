export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    blackAlpha40: '#00000066',
  },
};

type breakpointsType = {
  id: 'tablet' | 'pc';
  breakpoint: number;
}[];

const breakpoints: breakpointsType = [
  {
    id: 'tablet',
    breakpoint: 600,
  },
  {
    id: 'pc',
    breakpoint: 1025,
  },
];

export const MediaQuery = breakpoints.reduce((acc, { id, breakpoint }) => {
  return {
    ...acc,
    [id]: `@media (min-width: ${breakpoint}px)`,
  };
}, {});
