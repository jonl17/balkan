import styled from "styled-components"
import BalkanSVG from "../../../../static/assets/svg/BalkanLogo-04.svg"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.display ? 1 : 0)};
  pointer-events: none;
  transition: 0.2s ease-in-out;
`
export const Logo = styled(BalkanSVG)`
  height: 100%;
  margin: auto;
  width: 100%;
  box-sizing: border-box;
  padding: 10%;
`
