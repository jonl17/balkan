import React, { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"

/** components */
import { VideoComponent } from "./Styled"
import { INCREMENT_VIDEO_LOADED } from "../../../../../../state/action"

const Video = ({ selected, children, uniqueid, animationdelay }) => {
  const [ready, prepare] = useState(false)
  const dispatch = useDispatch()

  const canPlayCallBack = () => {
    prepare(true)
    dispatch({ type: INCREMENT_VIDEO_LOADED })
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
      animationdelay={animationdelay / 7}
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
