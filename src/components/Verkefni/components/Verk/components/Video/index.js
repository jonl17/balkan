import React, { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"

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

  return (
    <VideoComponent
      ready={ready}
      onCanPlay={() => prepare(true)}
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
