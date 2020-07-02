import React from 'react'
import { 
    Drawer as MUIDrawer,
    List, 
    ListItem, 
    ListItemIcon,
    ListItemText,
    makeStyles
} from '@material-ui/core';
import {
    Inbox,
    Star,
    Email,
    Drafts
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    drawer: {
        width: "190px"
    },
    list: {
        padding: theme.spacing(0, 0)
    }
}))

const Drawer = (props) => {
    const classes = useStyles()
    const itemsList = [
        {
            text: 'Inbox',
            icon: <Inbox />,
        },
        {
            text: 'Starred',
            icon: <Star />,
        },
        {
            text: 'Send email',
            icon: <Email />,
        },
        {
            text: 'Drafts',
            icon: <Drafts />,
        },
    ]
    return (
        <MUIDrawer variant="permanent" className={classes.drawer} {...props}>
            <List className={classes.list} dense>
                {itemsList.map((item, index) => {
                    const {text, icon} = item
                    return (
                        <ListItem button key={text}>
                            <ListItemIcon >{icon}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                })}
            </List>
        </MUIDrawer>
    )
}

export default Drawer