import React from "react"
import { connect } from "react-redux"
import { setDevice } from "../state/action"
import { GlobalStyle } from "../components/GlobalStyle"

/** components */
import Haus from "../components/Haus"
import Sidebar from "../components/Sidebar"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.callBack = this.callBack.bind(this)
  }
  componentDidMount() {
    this.callBack()
    window.addEventListener("resize", this.callBack)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.callBack)
  }
  callBack() {
    const { dispatch } = this.props
    dispatch(setDevice(window.innerWidth))
  }
  render() {
    return (
      <>
        <GlobalStyle></GlobalStyle>
        {/* SEO */}
        <Haus></Haus>
        <Sidebar position={`left`}></Sidebar>
        <Sidebar position={`right`}></Sidebar>
        {this.props.children}
      </>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Layout)
