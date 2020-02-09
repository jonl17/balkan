import React from "react"

/** components */
import Verkefni from "../components/Verkefni"
import LoadingScreen from "../components/LoadScreen"

const index = () => {
  return (
    <>
      <LoadingScreen></LoadingScreen>
      <Verkefni></Verkefni>
    </>
  )
}

export default index
