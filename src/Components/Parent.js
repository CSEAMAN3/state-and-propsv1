import React from 'react'
import Child from "./Child"

export default function Parent(){

    const firstName = "Billy"
    const surName = "Smith"

    return (
    <div>
        <Child name={firstName} surname={surName} />
    </div>
)
}
