import React, { useEffect, useRef, useState } from "react"
import { connect, useDispatch } from "react-redux"
import { INCREMENT_VIDEO_LOADED } from "../../../../../../state/action"

/** components */
import { VideoComponent } from "./Styled"

const Video = ({ selected, children, uniqueid }) => {
  const vidRef = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    if (selected) {
      vidRef.current.play()
    } else {
      vidRef.current.pause()
    }
  })

  const [loaded, load] = useState(false)

  useEffect(() => {
    let video = document.getElementById(uniqueid + "-video")
    video.addEventListener("loadeddata", () => {
      dispatch({ type: INCREMENT_VIDEO_LOADED })
      load(true)
    })
  }, [])
  console.log(loaded)
  return (
    <VideoComponent
      fadein={loaded}
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
