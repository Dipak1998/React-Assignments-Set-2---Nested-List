import React, { useState } from 'react'
import Towns from './Towns'

function Cities(props) {
  const [buttonClicked, setClick] = useState(null)
  return (
    <>
      <li
        className={'city' + props.c}
        onClick={() => {
          setClick(!buttonClicked)
        }}
      >
        <button>{props.city.name}</button>
      </li>
      <ul>
        {buttonClicked
          ? props.city.towns.map((town, t) => <Towns town={town} t={t + 1} />)
          : ''}
      </ul>
    </>
  )
}

export default Cities
