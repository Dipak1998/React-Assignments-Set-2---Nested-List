import React, { useState } from 'react'
import Towns from './Towns'

function Cities({ city, c }) {
  const [buttonClicked, setClick] = useState(null)
  return (
    <>
      <li
        className={'city' + c}
        onClick={() => {
          setClick(!buttonClicked)
        }}
      >
        <button>{city.name}</button>
      </li>
      <ul>
        {buttonClicked
          ? city.towns.map((town, t) => <Towns town={town} t={t + 1} />)
          : ''}
      </ul>
    </>
  )
}

export default Cities
