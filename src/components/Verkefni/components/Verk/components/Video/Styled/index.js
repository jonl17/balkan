import styled, { css } from "styled-components"

export const VideoComponent = styled.video`
  top: 0;
  left: 0;
  height: 100%;
  object-fit: cover;
  margin: auto;
  transition: 0.5s ease-in-out;
  ${props =>
    props.selected &&
    css`
      height: 100%;
      padding-bottom: 185px;
      box-sizing: border-box;
      margin: 0;
      width: 100%;
    `}
  height: ${props => (props.ready ? "100%" : "0%")};
`
