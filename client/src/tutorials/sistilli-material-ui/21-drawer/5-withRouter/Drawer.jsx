import React from 'react'
import {
    Drawer as MUIDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles
} from '@material-ui/core'
import { Home, ContactMail, Person } from '@material-ui/icons'
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: '160px'
    },
    list: {
        padding: theme.spacing(0, 0)
    }
}))

const Drawer = (props) => {
    const { history } = props
    const classes = useStyles()
    const itemsList = [
        {
            text: 'Home',
            icon: <Home />,
            onClick: () => history.push('/')
        },
        {
            text: 'Contact',
            icon: <ContactMail />,
            onClick: () => history.push('/contact')
        },
        {
            text: 'About',
            icon: <Person />,
            onClick: () => history.push('/about')
        }
    ]
    return (
        <MUIDrawer variant="permanent" className={classes.drawer} {...props}>
            <List className={classes.list} dense>
                {itemsList.map((item, index) => {
                    const { text, icon, onClick } = item
                    return (
                        <ListItem button key={text} onClick={onClick}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                })}
            </List>
        </MUIDrawer>
    )
}

export default withRouter(Drawer)
