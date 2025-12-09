import { css } from 'styled-components';

const baseFontStyle = css`
  font-family: 'Nunito', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

const title = css`
  ${baseFontStyle}
  font-weight: 500;
  font-size: 128px;
`;

const subTitle = css`
  ${baseFontStyle}
  font-weight: 400;
  font-size: 72px;
`;

const body = css`
  ${baseFontStyle}
  font-weight: 300;
  font-size: 32px;
`;

const button = css`
  ${baseFontStyle}
  font-weight: 300;
  font-size: 32px;
`;

export const Typography = {
  title,
  subTitle,
  body,
  button,
};
