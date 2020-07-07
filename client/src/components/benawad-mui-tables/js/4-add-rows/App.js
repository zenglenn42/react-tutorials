import React, { useState } from 'react'
import MyForm from './MyForm'
import MyTable from './MyTable'
import ids from 'short-id'

export function App() {
    const [rows, setRows] = useState([{
        id: 45,
        firstName: "bob",
        lastName: "bob2",
        email: "bob@bob.com"
    }])

    return (
        <div >
            <MyForm onSubmit={(data) => {
                setRows((currentRows) => [
                    {
                        id: ids.generate(),
                        ...data
                    },
                    ...currentRows
                ])
            }} />
            <MyTable 
                rows={rows}
            />
        </div>
    )
}
