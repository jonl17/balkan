import React, { useEffect, useRef, useState } from "react"

/** components */
import { VideoComponent } from "./Styled"

const Video = ({ selected, children, uniqueid }) => {
  const canPlayCallBack = () => {
    console.log("YAO")
  }
  const vidRef = useRef()
  useEffect(() => {
    document
      .getElementById(uniqueid + "-video")
      .addEventListener("canplaythrough", () => canPlayCallBack())
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
