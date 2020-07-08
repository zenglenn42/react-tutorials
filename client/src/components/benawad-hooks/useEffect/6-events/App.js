import React, { useEffect, useState } from 'react'

export const App = () => {
    const [{ x, y }, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const event = "mousemove"
        const eventCallback = (e) => {
            const {clientX, clientY} = e
            setPosition({x: clientX, y: clientY})
        }
        window.addEventListener(event, eventCallback)        

        // Remove listener in cleanup when component will unmount.
        return () => window.removeEventListener(event, eventCallback)

    }, []) // Add mouse event listener on first render because of [].

    return (
        <div>
            Mouse position: ({x}, {y})
        </div>
    )
}

export default App
