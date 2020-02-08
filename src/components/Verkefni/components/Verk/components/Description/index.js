import React, { useEffect, useState } from "react"

/** components */
import { Container, Text, Anchor } from "./Styled"
import { useSelector } from "react-redux"

const Description = ({ selected }) => {
  const [thisSelected, select] = useState(selected)
  useEffect(() => {
    select(selected)
  }, [selected])
  return thisSelected ? (
    <Container>
      <Anchor href="https://www.visir.is/" target="_blank">
        Visit website
      </Anchor>
      <Text>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae
        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
      </Text>
    </Container>
  ) : (
    <></>
  )
}

export default Description
