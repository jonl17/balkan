import React, { useEffect, useRef, useState } from "react"

/** components */
import { VideoComponent } from "./Styled"

const Video = ({ selected, children, uniqueid }) => {
  const [ready, prepare] = useState(false)

  const canPlayCallBack = () => {
    prepare(true)
  }
  const vidRef = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      document
        .getElementById(uniqueid + "-video")
        .addEventListener("canplaythrough", canPlayCallBack())
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (selected) {
      vidRef.current.play()
    } else {
      vidRef.current.pause()
    }
  })

  return (
    <VideoComponent
      ready={ready}
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
