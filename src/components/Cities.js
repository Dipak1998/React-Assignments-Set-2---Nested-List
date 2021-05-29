// import React, { useState } from 'react'
// import Towns from './Towns'

// function Cities(props) {
//   const [buttonClicked, setClick] = useState(false)
//   return (
//     <>
//       <li id={'city' + props.c}>
//         <button
//           onClick={() => {
//             setClick(!buttonClicked)
//           }}
//         >
//           {props.city.name}
//         </button>
//       </li>

//       {buttonClicked ? (
//         <ul>
//           {props.city.towns.map((town, t) => (
//             <Towns town={town} t={t + 1} key={t + 1} />
//           ))}
//         </ul>
//       ) : (
//         ''
//       )}
//     </>
//   )
// }

// export default Cities
import React, { useState } from 'react'
import Town from './Towns'

export default function Cities(props) {
  const [click, setclick] = useState(false)
  const changeClick = () => {
    setclick(!click)
  }
  return (
    <>
      <li onClick={changeClick} id={`city${props.id}`}>
        <button>{props.cities.name}</button>
      </li>
      <ul>
        {click
          ? props.cities.towns.map((town, index) => {
              return <Town town={town} key={index + 1} id={index + 1} />
            })
          : ''}
      </ul>
    </>
  )
}
