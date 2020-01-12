import React from "react"

/** components */
import { VideoComponent } from "./Styled"

class Video extends React.Component {
  componentDidUpdate() {
    if (this.props.selected) {
      this.refs.vidRef.play()
    } else {
      this.refs.vidRef.pause()
    }
  }
  render() {
    const { selected } = this.props
    return (
      <VideoComponent loop muted ref="vidRef" selected={selected}>
        {this.props.children}
      </VideoComponent>
    )
  }
}

export default Video
