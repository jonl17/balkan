import styled, { css } from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 45px;
`
export const SubContainer = styled.div`
  display: flex;
`
export const Text = styled.p`
  margin-right: 10px;
  text-transform: uppercase;
  ${props =>
    props.description &&
    css`
      color: white;
    `}
`
