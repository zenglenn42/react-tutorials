// Portions courtesy: Material UI
// https://github.com/mui-org/material-ui/blob/next/LICENSE

import React, { useLayoutEffect, useState, useRef } from 'react'
import { List } from '@material-ui/core'
import DrawerItem from './DrawerItem'
import { pageToTitle } from './helpers'

const renderNavItems = (options) => {
    const { pages, ...params } = options
    return (
        <List style={{ paddingBottom: 0 }}>
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

    const title = pageToTitle(page)
    if (page.children && page.children.length > 1) {
        const topLevel = activePage
            ? activePage.pathname.indexOf(`${page.pathname}/`) === 0
            : false
        items.push(
            <DrawerItem
                linkProps={page.linkProps}
                depth={depth}
                key={title}
                topLevel={topLevel && !page.subheader}
                openImmediately={topLevel || Boolean(page.subheader)}
                title={title}
            >
                {renderNavItems({
                    pages: page.children,
                    activePage,
                    depth: depth + 1,
                    ...params
                })}
            </DrawerItem>
        )
    } else {
        const title = pageToTitle(page)
        page =
            page.children && page.children.length === 1
                ? page.children[0]
                : page

        items.push(
            <DrawerItem
                linkProps={page.linkProps}
                depth={depth}
                key={title}
                title={title}
                href={page.pathname}
                onClick={params.onClose}
            />
        )
    }

    return items
}

export const DrawerList = (props) => {
    const { pages, setDimensions, history } = props
    const [activePage, setActivePage] = useState({ pathname: '/' })

    const _listRef = useRef()
    const [listRef, setListRef] = useState(_listRef)

    useLayoutEffect(() => {
        setListRef(listRef)
    }, [listRef, setListRef])

    useLayoutEffect(() => {
        const { width, height } = listRef.current.getBoundingClientRect()
        setDimensions({ width: width, height: height })
        // console.log("list dimensions:", width, height)
    }, [listRef, setDimensions])

    return (
        <div ref={listRef}>
            {renderNavItems({ pages, activePage, history, depth: 0 })}
        </div>
    )
}

export default DrawerList
