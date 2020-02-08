import styled, { css } from "styled-components"

export const Container = styled.div`
  height: 25px;
  width: 25px;
  position: absolute;
  top: 15px;
  right: 25px;
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
  height: 1px;
  background: transparent;
  width: 100%;
  border-bottom: 1px solid black;
  transition: 0.2s ease-in-out;
  ${props =>
    props.ex &&
    css`
      ${props =>
        props.one &&
        css`
          transform: translateY(4px) rotate(-135deg);
        `}
      ${props =>
        props.two &&
        css`
          transform: translateY(-10px) rotate(-45deg);
        `}
    `}
`
