import React, { useLayoutEffect, useState, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { v4 as getKey } from 'uuid'
import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    list: {
        overflowY: 'scroll',
        padding: theme.spacing(0, 0)
    }
}))

export const DrawerList = withRouter((props) => {
    const classes = useStyles()
    const { items, setDimensions, history } = props

    const _listRef = useRef()
    const [listRef, setListRef] = useState(_listRef)

    useLayoutEffect(() => {
        setListRef(listRef)
    }, [listRef, setListRef])

    useLayoutEffect(() => {
        const { width, height } = listRef.current.getBoundingClientRect()
        setDimensions({ width: width, height: height })
        //console.log("list dimensions:", width, height)
    }, [listRef, setDimensions])

    return (
        <div ref={listRef}>
            <List className={classes.list} dense>
                {items.map((item, index) => {
                    const { text, icon, divider, routepath } = item
                    const onClick = routepath
                        ? () => history.push(routepath)
                        : () => {}
                    return divider ? (
                        <Divider key={getKey()}/>
                    ) : (
                        <ListItem button key={text} onClick={onClick}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
})

export default DrawerList
