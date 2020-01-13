import styled, { css } from "styled-components"

export const Container = styled.div`
  height: 40px;
  width: 40px;
  position: absolute;
  top: 75px;
  right: 75px;
  z-index: 8;
  display: ${props => props.display};
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  &&:hover {
    cursor: pointer;
  }
`
export const Line = styled.span`
  height: 3px;
  width: 100%;
  background: black;
  transition: 0.2s ease-in-out;
  ${props =>
    props.ex &&
    css`
      ${props =>
        props.one &&
        css`
          transform: translateY(7px) rotate(-135deg);
        `}
      ${props =>
        props.two &&
        css`
          transform: translateY(-13px) rotate(-45deg);
        `}
    `}
`
