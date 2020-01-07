import styled from "styled-components"
import { styles } from "../../../constants"

export const Container = styled.div`
  height: auto;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 15px 10% 15px 10%;
  display: flex;
  justify-content: center;
`
export const Word = styled.h1`
  text-transform: uppercase;
  margin: 0;
  display: flex;
  justify-content: space-around;
  transition: 0.35s ease-out;
  width: ${props => props.size};
  padding: 0 5px 0 5px;
`
export const Letter = styled.span``
