import React from 'react'
import MyForm from './MyForm'

export function App() {
    return (
        <div>
            <MyForm
                onSubmit={({ email, firstName, lastName }) => {
                    console.log(email, firstName, lastName)
                }}
            />
        </div>
    )
}
