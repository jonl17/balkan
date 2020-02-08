import React, { useEffect, useRef, useState } from "react"
import { connect } from "react-redux"

/** components */
import { VideoComponent } from "./Styled"

const Video = ({ selected, children, uniqueid }) => {
  const vidRef = useRef()
  useEffect(() => {
    if (selected) {
      vidRef.current.play()
    } else {
      vidRef.current.pause()
    }
  })

  return (
    <VideoComponent
      id={uniqueid + "-video"}
      onLoad={() => console.log("loaded!")}
      loop
      muted
      ref={vidRef}
      selected={selected}
    >
      {children}
    </VideoComponent>
  )
}

export default connect()(Video)
