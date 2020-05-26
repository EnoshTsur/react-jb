import React from 'react';
import Header from './components/Header/Header'
import Username from './components/Username/Username'
import Company from './common/Company'

export default function App() {

  const aroma = new Company("aroma", "aroma@roma", "1223");
  console.log(aroma)

  const [username, setUsername] = React.useState("guest")  

  function setUser(name) {
    setUsername(name)
  }


  /*
    ________________________________________
    | Hello guest  || Hello aroma your .... |
    ----------------------------------------

    __________________
    | Sign up        |
    | input name     |
    | input email    |
    | input password |
    | button send    |
    ------------------

  */

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

