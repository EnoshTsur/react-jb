import React from 'react'

export default function Header({ username, }) {

    const [isCool, setCool] = React.useState(true)

    return (
        <div>
            <h1 style={{
                color: isCool ? "blue" : "brown"
            }}>
                {isCool ? `hello yo ${username}!! yo!` : `bye bye ${username}`}
            </h1>

            <button onClick={() => setCool(!isCool)}>
                toggle cool
            </button>
        </div>
    )
}