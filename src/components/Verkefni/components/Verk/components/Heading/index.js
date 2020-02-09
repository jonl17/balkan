import React, { useState, useEffect } from "react"

/** components */
import { MainContainer, SubContainer, Text } from "./Styled"

const Heading = ({ ourwork, collab, selected }) => {
  const [thisSelected, select] = useState(selected)
  useEffect(() => {
    select(selected)
  }, [selected])
  return thisSelected ? (
    <MainContainer>
      {/* OUR WORK: BLE */}
      <SubContainer ourwork>
        <Text description>Our work: </Text>
        {ourwork.map((work, index) => (
          <Text key={index}>
            {index !== ourwork.length - 1 ? work + "," : work}
          </Text>
        ))}
      </SubContainer>
      {/* COLLABORATION: BLO */}
      <SubContainer collab>
        {collab ? (
          <>
            <Text description>Collaboration: </Text>
            <Text>{collab}</Text>
          </>
        ) : (
          <></>
        )}
      </SubContainer>
    </MainContainer>
  ) : (
    <></>
  )
}

export default Heading
