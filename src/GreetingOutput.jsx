import React from 'react'

const GreetingOutput = (props) => {
  return (
    <>
      <h1 data-cy="greeting"> Hello {props.planet.name} from a functional component</h1>
    </>
  )
}

export default GreetingOutput
