import styled from "styled-components"
import Img from "gatsby-image"

export const Container = styled.div`
  height: auto;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 15px 15% 15px 15%;
  display: flex;
  justify-content: center;
`
export const Word = styled.p`
  text-transform: uppercase;
  margin: 0;
  display: flex;
  justify-content: space-around;
  transition: 0.4s ease-out;
  letter-spacing: ${props => props.spacing};
  padding: 0 5px 0 5px;
`
export const Letter = styled.span``
/** lógó */
export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: 100px;
  box-sizing: border-box;
  padding: 15px;
  &&:hover {
    cursor: pointer;
  }
  z-index: 10;
`
export const Image = styled(Img)``
