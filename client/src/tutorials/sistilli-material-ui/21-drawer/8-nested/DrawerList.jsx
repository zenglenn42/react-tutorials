// Portions courtesy: Material UI
// https://github.com/mui-org/material-ui/blob/next/LICENSE

import React, { useLayoutEffect, useState, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import {
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Collapse
} from '@material-ui/core'
import { pageToTitle } from './helpers'

const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection: 'column',
        paddingLeft: theme.spacing(1),
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    list: {
        overflowY: 'scroll',
        padding: theme.spacing(0, 0)
    }
}))

const renderNavItems = (options) => {
    const { pages, ...params } = options
    return (
        <List classes={params.classes} dense>
            {pages.reduce(
                // eslint-disable-next-line no-use-before-define
                (items, page) =>
                    reduceChildRoutes({
                        items,
                        page,
                        ...params
                    }),
                []
            )}
        </List>
    )
}

function reduceChildRoutes({ activePage, items, page, depth, ...params }) {
    if (page.displayNav === false) {
        return items
    }

    if (page.children && page.children.length > 1) {
        // const topLevel = activePage
        //    ? activePage.pathname.indexOf(`${page.pathname}/`) === 0
        //    : false
        let { pathname } = page
        let onClick = pathname ? () => params.history.push(pathname) : () => {}
        let title = pageToTitle(page)
        items.push(
            <ListItem
                classes={params.classes}
                button
                key={title}
                title={title}
                onClick={onClick}
                depth={depth}
            >
                <ListItemText primary={title} />
                <Collapse in={true} timeout="auto" unmountOnExit>
                    {renderNavItems({
                        pages: page.children,
                        activePage,
                        depth: depth + 1,
                        ...params
                    })}
                </Collapse>
            </ListItem>
        )
    } else {
        page =
            page.children && page.children.length === 1
                ? page.children[0]
                : page
        let { pathname } = page
        let onClick = pathname ? () => params.history.push(pathname) : () => {}
        let title = pageToTitle(page)
        items.push(
            <ListItem
                classes={params.classes}
                button
                key={title}
                title={title}
                onClick={onClick}
                depth={depth}
            >
                <ListItemText primary={title} />
            </ListItem>
        )
    }

    return items
}

export const DrawerList = withRouter((props) => {
    const classes = useStyles()
    const { pages, setDimensions, history } = props
    // const { activePage, pages } = useContext(PageContext)
    const activePage = { pathname: '/' }

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
            {renderNavItems({ pages, activePage, history, depth: 0, classes })}
        </div>
    )
})

export default DrawerList
