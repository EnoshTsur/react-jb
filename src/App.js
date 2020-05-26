import React from 'react';
import Header from './components/Header/Header'
import Username from './components/Username/Username'


export default function App() {

  const [username, setUsername] = React.useState("guest")  

  function setUser(name) {
    setUsername(name)
  }

  return (
    <div>
      <Header username={username}/>
      <Username setUser={setUser} />

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

