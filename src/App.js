import React from 'react';

export default function App({ name, age }) {

  const greetings = `Hello ${name} your age is: ${age}`

  const [isError, setError] = React.useState(false);

  return (
    <div>

      <h1> {greetings} </h1>

      <h2>{ isError ? 'Failure' : 'Success' }</h2>

      <button onClick={() => setError(!isError)}>Toggle Error</button>
    </div>
  );
}



