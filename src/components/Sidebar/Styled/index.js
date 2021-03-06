import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  padding-top: 150px;
  height: 100%;
  width: 7%;
  z-index: 6;
  ${props =>
    props.position === `left` &&
    css`
      left: 0;
    `}
  ${props =>
    props.position === `right` &&
    css`
      right: 0;
    `}
`
export const Text = styled.p`
  transform: rotate(${props => props.rotation});
  margin: 0;
  text-transform: uppercase;
  color: white;
`
export const Anchor = styled(Link)`
  text-decoration: none;
  color: inherit;
`
