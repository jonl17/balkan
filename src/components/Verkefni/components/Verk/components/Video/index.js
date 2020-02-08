import React, { useEffect, useRef, useState } from "react"

/** components */
import { VideoComponent } from "./Styled"

const Video = ({ selected, children, uniqueid }) => {
  const vidRef = useRef()

  useEffect(() => {
    if (vidRef.current.readyState >= vidRef.HAVE_FUTURE_DATA) {
      console.log("video can play!")
    } else {
      vidRef.current.addEventListener(
        "canplay",
        function() {
          console.log("video can play!")
        },
        false
      )
    }
    return () => {
      vidRef.current.removeEventListener(
        "canplay",
        function() {
          console.log("video can play!")
        },
        false
      )
    }
  })

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
      loop
      muted
      ref={vidRef}
      selected={selected}
    >
      {children}
    </VideoComponent>
  )
}

export default Video
