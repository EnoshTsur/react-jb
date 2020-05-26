import React from 'react'

export default function Username({ setUser }) {

    const [username, setUsername] = React.useState('')

    return (
        <div>
            <input
                type="text"
                onChange={e => {
                    setUsername(e.target.value)
                    console.log(username)
                }}
            />
            <button onClick={() => setUser(username)}>
                Send
                </button>
        </div>
    )
}