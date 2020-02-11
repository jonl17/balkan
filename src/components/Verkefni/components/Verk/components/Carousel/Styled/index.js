import styled from "styled-components"

// 16:9 ratio
// https://css-tricks.com/aspect-ratio-boxes/
export const AspectRatioBox = styled.div`
  overflow: hidden;
  height: 0;
  padding-top: 64.25%;
  position: ${props => props.position};
`
