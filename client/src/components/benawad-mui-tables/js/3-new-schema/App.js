import React from 'react'
import MyForm from './MyForm'
import MyTable from './MyTable'

export function App() {
    return (
        <div >
            <MyForm onSubmit={({email, firstName, lastName}) => {
                console.log(email, firstName, lastName)
            }} />
            <MyTable 
                rows={[{
                    id: 45,
                    firstName: "bob",
                    lastName: "bob2",
                    email: "bob@bob.com"
                }]}
            />
        </div>
    )
}
