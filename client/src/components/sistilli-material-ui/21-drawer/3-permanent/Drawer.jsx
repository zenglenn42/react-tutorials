import React from 'react'
import { 
    Drawer as MUIDrawer,
    List, 
    ListItem, 
    ListItemText,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    drawer: {
        width: "160px"
    },
    list: {
        padding: theme.spacing(0, 0)
    }
}))

const Drawer = (props) => {
    const classes = useStyles()

    return (
        <MUIDrawer variant="permanent" className={classes.drawer} {...props}>
            <List className={classes.list} dense>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </MUIDrawer>
    )
}

export default Drawer