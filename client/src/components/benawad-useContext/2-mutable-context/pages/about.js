import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

export function About() {
    const { value } = useContext(UserContext)
    return (
        <div>
            <h2>About</h2>
            {value}
        </div>
    )
}