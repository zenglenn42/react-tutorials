import React, { useState, useEffect } from 'react'
import Hello from './Hello'
import useForm from './useForm'
import { Button } from '@material-ui/core'

export const App = () => {
    const [values, handleChange] = useForm({password: ""})
    const [showHello, setShowHello] = useState(true)

    useEffect(()=> {console.log("render: I fire only on pw changes.")}, [values.password])

    return (
        <div>
            <input 
                type="password" 
                name="password" 
                placeholder="type here for rerender"
                value={values.password} 
                onChange={handleChange}
            />
            <label htmlFor="password" >&nbsp;Type here to trigger renders.</label><br/><br/>

            <Button variant="contained" onClick={() => setShowHello(!showHello)}>
                toggle mount
            </Button><br/><br/>
            {showHello && <Hello />}
        </div>
    )
}

export default App;