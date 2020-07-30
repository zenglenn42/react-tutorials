import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import { Link, useTheme, ListItemIcon, Typography } from '@material-ui/core'
import clsx from 'clsx'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'

const useStyles = makeStyles((theme) => ({
    listIconWidth: {
        minWidth: theme.spacing(6)
    },
    item: {
        // backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textTransform: 'none',
        color: 'black'
    },
    itemLeaf: {
        // backgroundColor: 'yellow',
        display: 'block',
        color: 'black',
        textDecoration: 'none',
        textTransform: 'none',
        paddingTop: 0,
        paddingBottom: theme.spacing(1, 0)
    },
    buttonText: {
        textTransform: 'none'
    },
    buttonBoldText: {
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '96%'
    },
    button: {
        display: 'flex',
        letterSpacing: 0,
        textTransform: 'none',
        textAlign: 'left',
        paddingLeft: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    buttonLeaf: {
        //backgroundColor: 'red',
        letterSpacing: 0,
        textDecoration: 'none',
        width: '100%',
        color: 'black'
    },
    collapse: {
        paddingBottom: 0
    },
    // This doesn't seem to have an effect as yet.
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
        openImmediately = false,
        title,
        linkProps,
        icon,
        ...other
    } = props
    const classes = useStyles()
    const [sublistOpen, setSublistOpen] = React.useState(openImmediately)

    const handleSublistToggle = () => {
        setSublistOpen((prevOpen) => !prevOpen)
    }

    const style = {
        paddingLeft: theme.spacing(2.5) * (depth + 1)
    }

    if (!href) {
        return (
            <>
                <Link
                    component={Button}
                    underline="none"
                    style={style}
                    className={clsx(classes.buttonLeaf, `depth-${depth}`)}
                    onClick={handleSublistToggle}
                    {...linkProps}
                    classes={{
                        root: classes.button
                    }}
                >
                    {icon && (
                        <ListItemIcon
                            classes={{
                                root: classes.listIconWidth
                            }}
                        >
                            {icon}
                        </ListItemIcon>
                    )}
                    <Typography
                        variant="body1"
                        classes={{
                            root: classes.buttonBoldText
                        }}
                    >
                        {title}
                    </Typography>
                    {sublistOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </Link>
                <Collapse
                    style={{ marginTop: theme.spacing(-1) }}
                    in={sublistOpen}
                    timeout="auto"
                    unmountOnExit
                >
                    {children}
                </Collapse>
            </>
        )
    }

    const extHref = href.indexOf('http') === 0 && href

    return (
        <ListItem
            component={Button}
            classes={{
                root: classes.button
                // text: classes.buttonText,
                // button: classes.buttonPadding
            }}
            className={classes.itemLeaf}
            disableGutters
            {...other}
        >
            {extHref ? (
                <Link
                    component={Button}
                    // activeClassName={`drawer-active ${classes.active}`}
                    underline="none"
                    style={style}
                    className={clsx(classes.buttonLeaf, `depth-${depth}`)}
                    href={extHref}
                    onClick={onClick}
                    {...linkProps}
                    classes={{
                        root: classes.button
                        //text: classes.buttonText
                    }}
                >
                    {icon && (
                        <ListItemIcon
                            classes={{
                                root: classes.listIconWidth
                            }}
                        >
                            {icon}
                        </ListItemIcon>
                    )}
                    {title}
                </Link>
            ) : (
                <Link
                    component={RouterLink}
                    // activeClassName={`drawer-active ${classes.active}`}
                    underline="none"
                    style={style}
                    to={href}
                    onClick={onClick}
                    className={clsx(classes.buttonLeaf, `depth-${depth}`)}
                    classes={{
                        root: classes.button
                        //text: classes.buttonText
                    }}
                    {...linkProps}
                >
                    {icon && (
                        <ListItemIcon
                            classes={{
                                root: classes.listIconWidth
                            }}
                        >
                            {icon}
                        </ListItemIcon>
                    )}
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
    title: PropTypes.string.isRequired
}
