import React, { useEffect, useState } from "react"

/** components */
import { Container, Text, Anchor } from "./Styled"

const Description = ({ selected, lysing }) => {
  const [thisSelected, select] = useState(selected)
  useEffect(() => {
    select(selected)
  }, [selected])
  return thisSelected ? (
    <Container>
      <Anchor href="https://www.visir.is/" target="_blank">
        Visit website
      </Anchor>
      <Text>{lysing}</Text>
    </Container>
  ) : (
    <></>
  )
}

export default Description
