import React, { useState } from 'react'

export const App = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <label for="email" >Name:&nbsp;</label>
            <input name="email" value={email} onChange={e => setEmail(e.target.value)} /><br/>

            <label for="password" >Password:&nbsp;</label>
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
    )
}

export default App;