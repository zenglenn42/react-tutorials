import React, { useEffect } from 'react'
import useForm from './useForm'

export const App = () => {
    const [values, handleChange] = useForm({ email: '', password: '' })

    useEffect(() => {
        console.log('render: effect called')
        return () => console.log('values.email: cleanup called')
    }, [values.email])

    return (
        <div>
            <input
                name="email"
                placeholder="cleans up after me"
                value={values.email}
                onChange={handleChange}
            />
            <label htmlFor="email">&nbsp;Email</label>
            <br />

            <input
                type="password"
                name="password"
                placeholder="pls open console log"
                value={values.password}
                onChange={handleChange}
            />
            <label htmlFor="password">&nbsp;Password</label>
        </div>
    )
}

export default App
