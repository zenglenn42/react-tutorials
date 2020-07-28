import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import { Link, useTheme } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    item: {
        // backgroundColor: 'grey',
        display: 'block',
        paddingTop: 0,
        paddingBottom: 0,
        textTransform: 'none',
        color: 'black'
    },
    itemLeaf: {
        // backgroundColor: 'yellow',
        display: 'block',
        paddingTop: 0,
        paddingBottom: 0,
        color: 'black',
        textDecoration: 'none',
        textTransform: 'none'
    },
    buttonText: {
        textTransform: 'none'
    },
    buttonBoldText: {
        textTransform: 'none',
        fontWeight: 'bold'
        // fontWeight: theme.typography.fontWeightRegular,
        // '&.depth-0': {
        //   fontWeight: theme.typography.fontWeightMedium,
        // }
    },
    button: {
        display: 'block',
        letterSpacing: 0,
        textTransform: 'none',
        width: '100%',
        textAlign: 'left',
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0
    },
    buttonLeaf: {
        //backgroundColor: 'red',
        letterSpacing: 0,
        textDecoration: 'none',
        width: '100%',
        paddingTop: 0,
        paddingBottom: 0,
        color: 'black'
    },
    collapse: {
        paddingBottom: 0
    },
    active: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
    }
}))

export default function DrawerItem(props) {
    const theme = useTheme()
    const {
        children,
        depth,
        href,
        onClick,
        openImmediately = true,
        topLevel = false,
        title,
        linkProps,
        ...other
    } = props
    const classes = useStyles()
    const [open, setOpen] = React.useState(openImmediately)

    const handleClick = () => {
        setOpen((oldOpen) => !oldOpen)
    }

    const style = {
        paddingLeft: theme.spacing(2) * (depth + 1)
    }

    if (!href) {
        return (
            <ListItem className={classes.item} disableGutters {...other}>
                <Button
                    activeClassName={`drawer-active ${classes.active}`}
                    classes={{
                        root: classes.button,
                        label: classes.buttonBoldText
                        // label: topLevel ? 'algolia-lvl0' : ''
                    }}
                    onClick={handleClick}
                    style={style}
                    variant="text"
                >
                    {title}
                </Button>
                <Collapse
                    style={{ marginTop: theme.spacing(-1) }}
                    in={open}
                    timeout="auto"
                    unmountOnExit
                >
                    {children}
                </Collapse>
            </ListItem>
        )
    }

    const extHref = href.indexOf('http') === 0 && href

    return (
        <ListItem
            component={Button}
            classes={{
                root: classes.button,
                text: classes.buttonText
            }}
            className={classes.itemLeaf}
            disableGutters
            {...other}
        >
            {extHref ? (
                <Link
                    component={Button}
                    underline="none"
                    style={style}
                    className={clsx(classes.buttonLeaf, `depth-${depth}`)}
                    href={extHref}
                    {...linkProps}
                    classes={{
                        root: classes.button,
                        text: classes.buttonText
                    }}
                >
                    {title}
                </Link>
            ) : (
                <Link
                    component={RouterLink}
                    underline="none"
                    style={style}
                    to={href}
                    className={clsx(classes.buttonLeaf, `depth-${depth}`)}
                    classes={{
                        root: classes.button,
                        text: classes.buttonText
                    }}
                    {...linkProps}
                >
                    {title}
                </Link>
            )}
        </ListItem>
    )
}

DrawerItem.propTypes = {
    children: PropTypes.node,
    depth: PropTypes.number.isRequired,
    href: PropTypes.string,
    linkProps: PropTypes.object,
    onClick: PropTypes.func,
    openImmediately: PropTypes.bool,
    title: PropTypes.string.isRequired,
    topLevel: PropTypes.bool
}
