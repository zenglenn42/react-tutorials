import React, { useEffect } from 'react'
import useForm from './useForm'

export const App = () => {
    const [values, handleChange] = useForm({email: "", password: ""})

    useEffect(()=> {console.log("render: I fire once.")}, [])

    return (
        <div>
            <input name="email" placeholder="pls open console log" value={values.email} onChange={handleChange} />
            <label for="email" >&nbsp;Name</label>
            <br/>

            <input 
                type="password" 
                name="password" 
                placeholder="effect fires once"
                value={values.password} 
                onChange={handleChange}
            />
            <label for="password" >&nbsp;Password</label>
        </div>
    )
}

export default App;