import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'

// setup
// create routes
// change routes
// route params

export const App = () => {
    const navLinkStyle = {
        display: 'inline',
        marginRight: '2em',
        marginLeft: 0
    }

    const NavBar = (
        <>
            <nav>
                Locations: &nbsp;
                <ul style={{ paddingLeft: 0, display: 'inline' }}>
                    <li style={navLinkStyle}>
                        <Link to="/">/</Link>
                    </li>
                    <li style={navLinkStyle}>
                        <Link to="/about">/about</Link>
                    </li>
                    <li style={navLinkStyle}>
                        <Link to="/about/me">/about/me</Link>
                    </li>
                </ul>
            </nav>
            <p>Rendered components:</p>
            <hr />
        </>
    )

    return (
        <BrowserRouter>
            {NavBar}
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
        </BrowserRouter>
    )
}

export default App
