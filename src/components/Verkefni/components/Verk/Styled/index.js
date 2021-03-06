import styled, { css } from "styled-components"

export const Box = styled.div`
  height: 100%;
  width: 17%;
  transition: 0.5s;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  filter: blur(3px);
  &&:hover {
    filter: blur(0px);
  }
  ${props =>
    props.selected &&
    css`
      margin-top: -15px;
      filter: blur(0px);
      width: 60%;
      height: 100%;
    `}
  ${props =>
    !props.selected &&
    css`
      &&:hover {
        cursor: pointer;
      }
    `}
`

export const TextInfoBox = styled.div`
  position: absolute;
  bottom: 0;
`

export const Text = styled.p`
  height: 100px;
  width: 100%;
  overflow-y: auto;
  font-size: 15px;
  line-height: 120%;
  display: none;
  margin: 0;
  box-sizing: border-box;
  padding-top: 15px;
  ${props =>
    props.selected &&
    css`
      display: inline-block;
    `}
`
export const Anchor = styled.a``
