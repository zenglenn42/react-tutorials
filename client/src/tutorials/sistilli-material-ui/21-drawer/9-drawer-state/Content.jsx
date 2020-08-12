import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Components from './Components'

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
                    from="/components"
                    render={(props) => <Components className={className} />}
                />
                <Route
                    from="/"
                    render={() => <h2 className={className}>404</h2>}
                />
            </Switch>
        </>
    )
}

export default Content
