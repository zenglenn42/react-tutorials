import React from 'react'
import { Navbar } from './Navbar'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Drawer from './Drawer'
import { makeStyles, useTheme } from '@material-ui/core'

export const App = () => {
    const theme = useTheme()

    const paperProps = {
        style: {
            position: 'relative',
            marginRight: theme.spacing(1)
        },
        elevation: 4
    }

    const useStyles = makeStyles({
        container: {
            display: 'flex',
            border: '1px solid black',
            backgroundColor: 'lightgray'
        },
        centered: {
            alignSelf: 'center',
            textAlign: 'center',
            margin: '0 auto'
        }
    })

    const classes = useStyles()

    return (
        <>
            <Router>
                <Navbar />
                <div className={classes.container}>
                    <Drawer PaperProps={paperProps} />
                    <Switch>
                        <Route
                            exact
                            from="/"
                            render={(props) => (
                                <Home className={classes.centered} {...props} />
                            )}
                        />
                        <Route
                            exact
                            path="/contact"
                            render={(props) => (
                                <Contact
                                    className={classes.centered}
                                    {...props}
                                />
                            )}
                        />
                        <Route
                            exact
                            from="/about"
                            render={(props) => (
                                <About
                                    className={classes.centered}
                                    {...props}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </Router>
        </>
    )
}
