import React from 'react'
import useForm from './useForm'

// export const App = () => {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//
//     return (
//         <div>
//             <label for="email" >Name:&nbsp;</label>
//             <input name="email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
//
//             <label for="password" >Password:&nbsp;</label>
//             <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
//         </div>
//     )
// }

export const App = () => {
    const [values, handleChange] = useForm({ email: '', password: '' })

    return (
        <div>
            <label htmlFor="email">Name:&nbsp;</label>
            <input name="email" value={values.email} onChange={handleChange} />
            <br />

            <label htmlFor="password">Password:&nbsp;</label>
            <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />
        </div>
    )
}

export default App
