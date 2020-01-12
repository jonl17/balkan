import styled, { css } from "styled-components"

export const VideoComponent = styled.video`
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
