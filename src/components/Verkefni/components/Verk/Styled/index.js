import styled, { css } from "styled-components"

export const Box = styled.div`
  height: 100%;
  width: 15%;
  /* background: lightgray; */
  transition: 0.5s;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  filter: blur(3px);
  &&:hover {
    cursor: pointer;
    filter: blur(0px);
  }
  ${props =>
    props.selected &&
    css`
      filter: blur(0px);
      width: 60%;
      height: 100%;
    `}
`
export const Text = styled.p`
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 50%;
  font-size: 16px;
  line-height: 120%;
  display: none;
  margin: 0;
  ${props =>
    props.selected &&
    css`
      display: inline-block;
    `}
`
