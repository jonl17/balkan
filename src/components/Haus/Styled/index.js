import styled from "styled-components"
import { styles } from "../../../constants"

export const Container = styled.div`
  height: auto;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 15px;
`
export const Word = styled.h1`
  text-transform: uppercase;
  margin: 0;
  display: flex;
  justify-content: space-around;
  margin: auto;
  transition: ${styles.transition};
  width: ${props => props.size};
`
export const Letter = styled.span``
