import React from 'react';
import Header from './components/Header/Header'


export default function App() {

  const [username, setUsername] = React.useState("guest")  

  return (
    <div>
      <Header username={username}/>
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

