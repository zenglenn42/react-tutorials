import React from "react"
import CoolButton from "./CoolButton"

export const App = () => {
    const cool = true
    return (
        <>
            <CoolButton cool={cool} />
        </>
    )
}