import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { resizeHeader } from "../../state/action"

const Takkinn = styled.p`
  position: absolute;
  bottom: 25%;
  left: 25%;
  &&:hover {
    cursor: pointer;
  }
`

const Takki = () => {
  const dispatch = useDispatch()
  return (
    <Takkinn onClick={() => dispatch(resizeHeader())}>Smelltu hér!</Takkinn>
  )
}

export default Takki
