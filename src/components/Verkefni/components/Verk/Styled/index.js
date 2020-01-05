import styled from "styled-components"

export const Box = styled.div`
  height: 100%;
  width: 15%;
  background: ${props => props.color};
  transition: 0.2s;
  filter: blur(3px);
  &&:hover {
    cursor: pointer;
    filter: blur(0px);
  }
`
