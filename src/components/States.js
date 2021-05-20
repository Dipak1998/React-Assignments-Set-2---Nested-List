import React, { useState } from 'react'
import Cities from './Cities'

function States(props) {
  const [buttonClicked, setClick] = useState(null)
  return (
    <>
      <li id={'state' + props.s}>
        <button
          onClick={() => {
            setClick(!buttonClicked)
          }}
        >
          {props.state.name}
        </button>
      </li>

      {buttonClicked ? (
        <ul>
          {props.state.cities.map((city, c) => (
            <Cities city={city} c={c + 1} />
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  )
}

export default States
