import styled, { css } from "styled-components"

// const Scaling = css`
//   ${props =>
//     props.device === `largeBrowser` &&
//     css`
//       width: 625px;
//       height: 400px;
//     `}
//   ${props =>
//     props.device === `browser` &&
//     css`
//       width: 625px;
//       height: 400px;
//     `}
// `

export const VideoComponent = styled.video`
  /* position: absolute; */
  top: 0;
  left: 0;
  height: 100%;
  object-fit: contain;
  margin: auto;
  ${props =>
    props.selected &&
    css`
      width: 100%;
      padding-bottom: 150px;
      box-sizing: border-box;
      margin: 0;
      height: auto;
    `}
`
