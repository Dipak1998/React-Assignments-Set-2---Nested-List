// import React from 'react'

// function Towns(props) {
//   return (
//     <>
//       <li id={'town' + props.t}>{props.town.name}</li>
//     </>
//   )
// }

// export default Towns
import React from 'react'

export default function Town({ town, id }) {
  return (
    <>
      <li id={`town${id}`}>
        <button>{town.name}</button>
      </li>
    </>
  )
}
