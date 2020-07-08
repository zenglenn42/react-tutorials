import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Index } from "./pages"
import { About } from "./pages/about"
import { UserContext } from "./UserContext"

export function AppRouter() {
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
                <UserContext.Provider value="value from context">
                    <Route path="/" exact component={Index} />
                    <Route path="/about/" component={About} />
                </UserContext.Provider>
            </div>
        </Router>
    )
}
