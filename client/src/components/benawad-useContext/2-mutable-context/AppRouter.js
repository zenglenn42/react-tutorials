import React, { useState, useMemo } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Index } from "./pages"
import { About } from "./pages/about"
import { UserContext } from "./UserContext"

export function AppRouter() {
    const [value, setValue] = useState("value from context (set with setValue from useState hook)")

    const providerValue = useMemo(() => ({value, setValue}), [value, setValue])

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                    </ul>
                </nav>
                <UserContext.Provider value={providerValue}>
                    <Route path="/" exact component={Index} />
                    <Route path="/about/" component={About} />
                </UserContext.Provider>
            </div>
        </Router>
    )
}
