import styled from "styled-components"

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
