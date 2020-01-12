import styled, { css } from "styled-components"

export const Box = styled.div`
  height: 100%;
  width: 15%;
  background: ${props => props.color};
  transition: 0.5s;
  overflow: hidden;
  filter: blur(3px);
  &&:hover {
    cursor: pointer;
    filter: blur(0px);
  }
  ${props =>
    props.selected &&
    css`
      filter: blur(0px);
      width: 75%;
      height: 75%;
    `}
`
