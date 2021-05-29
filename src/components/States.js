// import React, { useState } from 'react'
// import Cities from './Cities'

// function States(props) {
//   const [buttonClicked, setClick] = useState(false)
//   return (
//     <>
//       <li id={'state' + props.s}>
//         <button
//           onClick={() => {
//             setClick(!buttonClicked)
//           }}
//         >
//           {props.state.name}
//         </button>
//       </li>

//       {buttonClicked ? (
//         <ul>
//           {props.state.cities.map((city, c) => (
//             <Cities city={city} c={c + 1} key={c + 1} />
//           ))}
//         </ul>
//       ) : (
//         ''
//       )}
//     </>
//   )
// }

// export default States

import React, { useState } from 'react'
import Cities from './Cities'

export default function States(props) {
  const [click, setclick] = useState(false)
  const { name, cities } = props.states
  const changeClick = () => {
    setclick(!click)
    console.log(click)
  }
  return (
    <>
      <li onClick={changeClick} id={`state${props.id}`}>
        <button>{name}</button>
      </li>
      <ul>
        {click
          ? cities.map((city, index) => {
              console.log('city', city)
              return <Cities cities={city} key={index + 1} id={index + 1} />
            })
          : ''}
      </ul>
    </>
  )
}
