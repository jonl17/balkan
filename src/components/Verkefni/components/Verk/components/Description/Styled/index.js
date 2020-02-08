import styled, { css } from "styled-components"

export const Container = styled.div`
  position: absolute;
  bottom: 0;
`

export const Text = styled.p`
  height: 100px;
  width: 100%;
  overflow-y: auto;
  font-size: 16px;
  line-height: 120%;
  display: none;
  margin: 0;
  box-sizing: border-box;
  padding-top: 15px;
  display: inline-block;
`
export const Anchor = styled.a`
  text-transform: uppercase;
  color: white;
  transition: 0.2s ease-in-out;
  &&:hover {
    color: black;
  }
`
