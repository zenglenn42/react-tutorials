import React, { useRef } from 'react'
import { Button } from '@material-ui/core'
import useForm from './useForm'

export const App = () => {
    const [values, handleChange] = useForm({ email: '', password: '' })

    const inputRef = useRef()

    return (
        <div>
            <label htmlFor="email">
                <input
                    ref={inputRef}
                    name="email"
                    placeholder="email"
                    value={values.email}
                    onChange={handleChange}
                />
                &nbsp;Email
            </label>
            <br />

            <label htmlFor="password">
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                />
                &nbsp;Password
            </label>
            <br />
            <br />

            <Button
                onClick={() => inputRef.current.focus()}
                variant="contained"
                size="small"
            >
                Focus on Email
            </Button>
            <br />
            <br />
        </div>
    )
}

export default App
