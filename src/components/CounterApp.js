import React from 'react'
import { useState } from 'react'
import '../style/Header.css'

function CounterApp() {
    const [count, setCount] = useState(0)

    function handleIncCount() {
        setCount(count + 1)
    }
    function handleDecCount() {
        setCount(count - 1)
    }

    return (
        <div className='counter'>
            <h2>Counter</h2>
            <h1>{count}</h1>
            <button onClick={handleIncCount}>Increase</button>
            <button onClick={handleDecCount}>Deccrease</button>
        </div>
    )
}

export default CounterApp
