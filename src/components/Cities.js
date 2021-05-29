import React, { useState } from 'react'
import Towns from './Towns'

function Cities(props) {
  const [buttonClicked, setClick] = useState(false)
  return (
    <>
      <li id={'city' + props.c}>
        <button
          onClick={() => {
            setClick(!buttonClicked)
          }}
        >
          {props.city.name}
        </button>
      </li>

      {buttonClicked ? (
        <ul>
          {props.city.towns.map((town, t) => (
            <Towns town={town} t={t + 1} key={t + 1} />
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  )
}

export default Cities
