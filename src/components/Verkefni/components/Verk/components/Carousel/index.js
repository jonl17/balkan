/** components */
import { AspectRatioBox } from "./Styled"

/** tech */
import React from "react"

const Carousel = ({ children, selected }) => {
  return (
    <AspectRatioBox position={selected ? "relative" : "unset"}>
      {children}
    </AspectRatioBox>
  )
}

export default Carousel
