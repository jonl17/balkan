import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  bottom: 0;
  padding-top: 15px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
    height: 100%;
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    height: 2px;
    width: 5px;
    background: black;
  }
`

export const Text = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 120%;
  display: none;
  margin: 0;
  box-sizing: border-box;
  padding-top: 15px;
  padding-right: 10px;
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
