// Portions courtesy: Material UI
// https://github.com/mui-org/material-ui/blob/next/LICENSE

import React, { useLayoutEffect, useState, useRef } from 'react'
import { List } from '@material-ui/core'
import DrawerItem from './DrawerItem'
import { pageToTitle } from './helpers'
import { v4 as getKey } from 'uuid'

let savedScrollTop = null
function PersistScroll(props) {
    const { children } = props
    const rootRef = React.useRef()

    React.useEffect(() => {
        const parent = rootRef.current ? rootRef.current.parentElement : null
        const activeElement = document.querySelector('.drawer-active')

        if (!parent || !activeElement || !activeElement.scrollIntoView) {
            return undefined
        }

        const activeBox = activeElement.getBoundingClientRect()

        if (savedScrollTop === null || activeBox.top - savedScrollTop < 0) {
            // Center the selected item in the list container.
            activeElement.scrollIntoView()
            // Fix a Chrome issue, reset the tabbable ring back to the top of the document.
            document.body.scrollIntoView()
        } else {
            parent.scrollTop = savedScrollTop
        }

        return () => {
            savedScrollTop = parent.scrollTop
        }
    }, [])

    return <div ref={rootRef}>{children}</div>
}

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
                key={getKey()}
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
                key={getKey()}
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
            <PersistScroll>
                {renderDrawerItems({
                    pages,
                    activePage,
                    depth: 0,
                    onLeafItemClick
                })}
            </PersistScroll>
        </div>
    )
}

export default DrawerList
