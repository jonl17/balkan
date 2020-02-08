import React, { useEffect, useRef, useState } from "react"

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

  const [ready, prepare] = useState(false)

  useEffect(() => {
    vidRef.current.oncanplay = () => {
      console.log("set")
      prepare(true)
    }
  }, [vidRef])

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
