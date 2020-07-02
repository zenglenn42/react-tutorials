import React from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Navbar } from './Navbar'

// import Drawer from "./Drawer"

export const App = () => {
    return (
        <>
            <Router>
                {/* <Drawer /> */}
                
                <Navbar />
                <Switch>
                    <Route exact from="/" render={props => <Home {...props} />} />
                    <Route exact path="/contact" render={props => <Contact {...props} />} />
                    <Route exact from="/about" render={props => <About {...props} />} />
                </Switch>            
            </Router>
        </>
    )
}
