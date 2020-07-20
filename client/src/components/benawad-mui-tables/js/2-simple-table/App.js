import React from 'react'
import MyForm from './MyForm'
import MyTable from './MyTable'

export function App() {
    return (
        <div>
            <MyForm
                onSubmit={({ email, firstName, lastName }) => {
                    console.log(email, firstName, lastName)
                }}
            />
            <MyTable />
        </div>
    )
}
