// Portions courtesy: Material UI
// https://github.com/mui-org/material-ui/blob/next/LICENSE

import React, { useLayoutEffect, useState, useRef } from 'react'
import { List } from '@material-ui/core'
import DrawerItem from './DrawerItem'
import { pageToTitle } from './helpers'

const renderDrawerItems = (options) => {
    const { pages, ...params } = options
    return (
        <List
            style={{
                paddingBottom: 0
            }}
        >
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
    const icon = page.icon // optional

    if (page.children && page.children.length > 1) {
        const topLevel = activePage
            ? activePage.pathname.indexOf(`${page.pathname}/`) === 0
            : false
        // push collapsible parent node and related children
        items.push(
            <DrawerItem
                title={title}
                icon={icon}
                linkProps={page.linkProps}
                depth={depth}
                key={title}
                topLevel={topLevel && !page.subheader}
                openImmediately={topLevel || Boolean(page.subheader)}
            >
                {renderDrawerItems({
                    pages: page.children,
                    activePage,
                    depth: depth + 1,
                    ...params
                })}
            </DrawerItem>
        )
    } else {
        // push leaf node, an actual route or external link
        page =
            page.children && page.children.length === 1
                ? page.children[0]
                : page

        items.push(
            <DrawerItem
                title={title}
                icon={icon}
                linkProps={page.linkProps}
                depth={depth}
                key={title}
                href={page.pathname}
                // Typically triggers mobile menu close.  Ignored on desktop.
                onClick={params.onLeafItemClick}
            />
        )
    }

    return items
}

export const DrawerList = (props) => {
    const { pages, setDimensions, onLeafItemClick } = props
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
            {renderDrawerItems({
                pages,
                activePage,
                depth: 0,
                onLeafItemClick
            })}
        </div>
    )
}

export default DrawerList
