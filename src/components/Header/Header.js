import React from 'react'

export default function Header({ isCool, }) {

    // if isCool -> hello yo!! yo!
    // if not -> bye bye.. 

    /*
        cool style -> color blue
        notcool style -> color brown
    */

    return (
        <h1 style={{
            color: isCool ? "blue" : "brown"
        }}>
            {isCool ? "hello yo!! yo!" : "bye bye"}
        </h1>
    )
}