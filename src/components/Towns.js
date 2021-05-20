import React from 'react'

function Towns(props) {
  return (
    <>
      <li id={'town' + props.t}>{props.town.name}</li>
    </>
  )
}

export default Towns
