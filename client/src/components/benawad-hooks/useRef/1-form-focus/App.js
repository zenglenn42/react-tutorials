import React, { useRef } from 'react'
import useForm from './useForm'
import { Button } from '@material-ui/core'

export const App = () => {
    const [values, handleChange] = useForm({email: "", password: ""})

    const inputRef = useRef()

    return (
        <div>
            <input ref={inputRef} name="email" placeholder="email" value={values.email} onChange={handleChange} />
            <label htmlFor="email" >&nbsp;Email</label>
            <br/>

            <input 
                type="password" 
                name="password" 
                placeholder="password"
                value={values.password} 
                onChange={handleChange}
            />
            <label htmlFor="password" >&nbsp;Password</label><br/><br/>

            <Button onClick={() => inputRef.current.focus()} variant="contained" size="small">
                Focus on Email
            </Button><br/><br/>
        </div>
    )
}

export default App;