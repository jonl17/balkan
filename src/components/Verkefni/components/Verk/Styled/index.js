import styled, { css } from "styled-components"

export const Box = styled.div`
  height: 100%;
  width: 15%;
  background: lightgray;
  transition: 0.5s;
  overflow: hidden;
  position: relative;

  filter: blur(3px);
  &&:hover {
    cursor: pointer;
    filter: blur(0px);
  }
  ${props =>
    props.selected &&
    css`
      filter: blur(0px);
      width: 70%;
      height: 85%;
    `}
`
export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  object-fit: contain;
  ${props =>
    props.selected &&
    css`
      height: 100%;
    `}
`
