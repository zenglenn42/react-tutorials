import React, { useState, useRef, useLayoutEffect } from 'react'

export const App = () => {
    const inputRef = useRef()
    const [rect, setRect] = useState({})

    useLayoutEffect(() => {
        const rect = inputRef.current.getBoundingClientRect() 
        setRect(rect)
        console.log(rect)
    }, [])

    return (
        <div>
            <input ref={inputRef} name="email" placeholder="email" />
            <label htmlFor="email" >&nbsp;Email</label>
            <br/><hr/>
            <pre>
                Email input field dimensions:

                {JSON.stringify(rect, null, 2)}            
            </pre>
        </div>
    )
}

export default App;