import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

export function Index() {
    const {value, setValue} = useContext(UserContext)
    return (
        <div>
            <h2>Home</h2>
            {value}
            <div>
                <button onClick={() => setValue("hey")}>change value</button>
            </div>
        </div>
    )
}