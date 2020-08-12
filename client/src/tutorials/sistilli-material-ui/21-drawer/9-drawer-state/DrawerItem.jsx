import React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Button, Collapse, ListItem, makeStyles } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import { FaRegIdBadge } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
    listItem: {
        display: 'block',
        paddingTop: 0,
        paddingBottom: 0
    },
    collapseButton: {
        letterSpacing: 0,
        justifyContent: 'flex-start',
        textTransform: 'none',
        width: '100%',
        fontWeight: 'bold',
        fontSize: '97%',
        opacity: '.70'
        // '&.depth-0': {
        //     // Styling based upon nested depth of subdrawer.
        //     fontSize: '96%',
        //     fontWeight: 'bold'
        // }
    },
    leftIndent: (depth) => {
        return {
            paddingLeft: theme.spacing(2.5) * (depth + 1)
        }
    },
    // !! Define 'navlinkButton' before 'activeRoute' style for
    //    proper css override behavior.
    navlinkButton: {
        letterSpacing: 0,
        justifyContent: 'flex-start',
        textDecoration: 'none', // no underline
        textTransform: 'none', // no uppercase
        fontWeight: theme.typography.fontWeightNormal,
        width: '100%'
        // You may style based upon nested depth.
        // '&.depth-0': {
        //     fontWeight: 'bold'
        // }
    },
    activeRoute: {
        // NavLink will use this.
        color: theme.palette.primary.main,
        fontSize: '113%',
        fontWeight: 'bold'
        // More subtle than 'bold' but requires additional
        // fonts to be installed (e.g., 700 weight).
        // fontWeight: theme.typography.fontWeightMedium
    }
}))

export default function DrawerItem(props) {
    const {
        children,
        depth,
        href,
        onClick,
        subdrawerOpen = false,
        title,
        linkProps
    } = props

    const classes = useStyles(depth)

    const isSubdrawer = !href
    // Use this state only if the item is a collapsible sub-drawer.
    const [collapseIn, setCollapseIn] = React.useState(subdrawerOpen)

    let drawerItem = undefined
    if (isSubdrawer) {
        const handleCollapseToggle = () => {
            setCollapseIn((prevState) => !prevState)
        }
        drawerItem = (
            <ListItem className={classes.listItem} disableGutters>
                <Button
                    color="inherit"
                    className={clsx(
                        classes.collapseButton,
                        classes.leftIndent,
                        `depth-${depth}`
                    )}
                    onClick={handleCollapseToggle}
                    endIcon={
                        collapseIn ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                    }
                >
                    {title}
                </Button>
                <Collapse in={collapseIn} timeout="auto" unmountOnExit>
                    {children}
                </Collapse>
            </ListItem>
        )
    } else {
        // Item is either an external url or internal route.
        const externalUrl = href.indexOf('http') === 0 && href
        const navLinkProps = externalUrl
            ? { to: { pathname: `${externalUrl}` } }
            : {
                  to: href, // internal route
                  activeClassName: `drawer-active ${classes.activeRoute}`
              }
        drawerItem = (
            <ListItem className={classes.listItem} disableGutters>
                <Button
                    color="inherit"
                    component={NavLink}
                    className={clsx(
                        classes.navlinkButton,
                        classes.leftIndent,
                        `depth-${depth}`
                    )}
                    disableTouchRipple
                    exact
                    onClick={onClick}
                    {...navLinkProps} // for route or external url
                    {...linkProps} // from json drawer data file
                >
                    {title}
                </Button>
            </ListItem>
        )
    }
    return drawerItem
}

DrawerItem.propTypes = {
    children: PropTypes.node,
    depth: PropTypes.number.isRequired,
    href: PropTypes.string,
    linkProps: PropTypes.object,
    onClick: PropTypes.func,
    subdrawerOpen: PropTypes.bool,
    title: PropTypes.string.isRequired
}
