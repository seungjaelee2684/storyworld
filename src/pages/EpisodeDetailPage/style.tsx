import styled from "styled-components";

export const EpisodeContainer = styled.section`
  width: 1040px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 60px;

  @media screen and (max-width: 1040px) {
    width: 100%;
    gap: 40px;
    padding-top: 40px;
  }
`;

export const CharacterListContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media screen and (max-width: 1040px) {
    gap: 16px;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  text-align: start;

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  button,
  input,
  textarea {
    all: revert;
    font-family: 'Pretendard';
    line-height: 180%;
  }

  br {
    display: block;
    content: "";
    margin: 4px 0;
  }

  @media screen and (max-width: 1040px) {
    h1 {
      font-size: 20px;
      line-height: 150%;
    }

    h2 {
      font-size: 18px;
      line-height: 150%;
    }

    h3 {
      font-size: 17px;
      line-height: 150%;
    }

    h4 {
      font-size: 16px;
      line-height: 150%;
    }

    h5 {
      font-size: 15px;
      line-height: 150%;
    }

    p, ul, ol, li {
      font-size: 14px;
      line-height: 150%;
    }
  }
`;