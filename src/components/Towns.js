import React from 'react'

function Towns({ town, t }) {
  return (
    <>
      <li className={'town' + t}>{town.name}</li>
    </>
  )
}

export default Towns
