import React from 'react';
import Header from './components/Header/Header'


export default function App() {


  const [isCool, setCool] = React.useState(true)

  return (
    <div>
      <Header />

      <button onClick={() => setCool(!isCool)}>
        toggle cool
        </button>
    </div>
  )
}


// export default function App({ name, age }) {

//   const greetings = `Hello ${name} your age is: ${age}`

//   const [isError, setError] = React.useState(false);


//   return (
//     <div>

//       <h1> {greetings} </h1>

//       <h2
//         style={{
//           color: isError ? "red" : "green",
//           padding: '1rem',
//         }}>

//         {isError ? 'Failure' : 'Success'}

//       </h2>

//       <button onClick={() => setError(!isError)}>Toggle Error</button>
//     </div>
//   );
// }

