import styled, { css, keyframes } from "styled-components"

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

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
  opacity: 0;
  ${props =>
    props.ready &&
    css`
      animation: ${fadein} 0.5s ease-in-out
        ${props => props.animationdelay + `s`} forwards;
    `}
`
