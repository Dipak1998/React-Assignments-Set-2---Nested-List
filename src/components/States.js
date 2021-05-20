import React, { useState } from 'react'
import Cities from './Cities'

function States({ state, s }) {
  const [buttonClicked, setClick] = useState(null)
  return (
    <>
      <li className={'state' + s}>
        <button
          onClick={() => {
            setClick(!buttonClicked)
          }}
        >
          {state.name}
        </button>
      </li>
      <ul>
        {buttonClicked
          ? state.cities.map((city, c) => <Cities city={city} c={c} />)
          : ''}
      </ul>
    </>
  )
}

export default States
