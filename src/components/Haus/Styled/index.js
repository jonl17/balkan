import styled, { keyframes, css } from "styled-components"
import { styles } from "../../../constants"

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.div`
  height: auto;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  justify-content: center;
`
export const Word = styled.h1`
  text-transform: uppercase;
  margin: 0;
  display: flex;
  justify-content: space-around;
  transition: ${styles.transition};
  width: ${props => props.size};
  padding: 0 5px 0 5px;
  ${props =>
    props.size === `10%` &&
    css`
      animation: ${fade} 0.2s ease-in-out 0s;
    `}
`
export const Letter = styled.span``
