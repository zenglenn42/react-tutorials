import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

export const Content = (props) => {
    const { className } = props
    return (
        <>
            <Switch>
                <Route
                    exact
                    from="/"
                    render={(props) => <Home className={className} />}
                />
                <Route
                    exact
                    path="/contact"
                    render={(props) => <Contact className={className} />}
                />
                <Route
                    exact
                    from="/about"
                    render={(props) => <About className={className} />}
                />
                <Route
                    exact
                    from="/about-lorem-ipsum"
                    render={(props) => (
                        <Redirect to="https://en.wikipedia.org/wiki/Lorem_ipsum" />
                    )}
                />
                <Route
                    exact
                    from="/about-me"
                    render={(props) => (
                        <Redirect to="https://zenglenn42.github.io/portfolio/about.html" />
                    )}
                />
            </Switch>
        </>
    )
}

export default Content
