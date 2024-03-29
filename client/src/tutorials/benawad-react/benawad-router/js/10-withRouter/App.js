import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Post from './Post'

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
                        <Link to="/posts/bob">/posts/bob</Link>
                    </li>
                    <li style={navLinkStyle}>
                        <Link to="/posts/1">/posts/1</Link>
                    </li>
                    <li style={navLinkStyle}>
                        <Link to="/about">/about</Link>
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
            {/* Match only the first Route that matches. */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/posts/:id" component={Post} />
                <Route
                    path="/"
                    render={() => <div>404 unknown location</div>}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default App
