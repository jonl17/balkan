import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SET_DEVICE } from "../state/action"
import { GlobalStyle } from "../components/GlobalStyle"

/** components */
import Haus from "../components/Haus"
import Sidebar from "../components/Sidebar"

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: SET_DEVICE, width: window.innerWidth })
    window.addEventListener("resize", () =>
      dispatch({ type: SET_DEVICE, width: window.innerWidth })
    )
    return () => {
      window.removeEventListener("resize", () =>
        dispatch({ type: SET_DEVICE, width: window.innerWidth })
      )
    }
  }, [window.innerWidth])
  return (
    <>
      <GlobalStyle></GlobalStyle>
      {/* SEO */}
      <Haus></Haus>
      <Sidebar position={`left`}></Sidebar>
      <Sidebar position={`right`}></Sidebar>
      {children}
    </>
  )
}

export default Layout
