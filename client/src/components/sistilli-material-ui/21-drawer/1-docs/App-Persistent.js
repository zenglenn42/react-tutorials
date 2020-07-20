import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const drawerWidth = 240

// I had to make several tweaks to the reference code in order for
// the appbar and drawer to be positioned relative to my tutorial
// content area and not absolutely positioned in the upper left corner
// of screen.
//
// The reference code makes the unfortunate assumption that the appbar
// should always be positioned as fixed in relation to the viewport rather
// than relative to some other container in the DOM.  This takes the
// appbar out of document flow and immune to the 'display: flex' style
// in the root element that normally wrappers the appbar.  Once I made the appbar
// position relative, all hell broke loose in the layout and I solved by placing
// only the drawer and content in a flex container underneath the
// appbar.
//
// Sadly, I lost the content animation when opening or closing the drawer. :-/
// But functionally, it's behaving canonically.  I need to understand the
// toobar mixins idiom.
//
// I may revisit the animation regression.

const useStyles = makeStyles((theme) => ({
    // root: {
    //   display: 'flex',
    // },
    flexDiv: {
        display: 'flex',

        // Account for vertically compact appbar for small screens.
        // 64px -> 48px height.
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            // for larger devices
            marginTop: theme.spacing(0),
        },
    },
    appBar: {
        // adding zIndex bump to play nicely with tutorial container.
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    // drawer: {
    //   width: drawerWidth,
    //   flexShrink: 0,
    // },
    // drawerPaper: {
    //   width: drawerWidth,
    // },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginTop: -theme.spacing(8),
        zIndex: theme.zIndex.drawer,
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: 0,
        // NB: If you make the drawer permanent and uncomment this
        //     then you get a close option that shows just the
        //     list item icons ... compact version of open drawer.
        //
        // width: theme.spacing(7),
        // [theme.breakpoints.up('sm')]: {
        //   width: theme.spacing(9),
        // },
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        // Account for vertically compact appbar for small screens.
        // 64px -> 48px height.
        minHeight: theme.spacing(6),
    },
    content: {
        flexGrow: 1,
        // Account for vertically compact appbar for small screens.
        // 64px -> 48px height.
        padding: theme.spacing(0, 2),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 2),
        },
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        // marginLeft: 0,
    },
}))

export function PersistentDrawerLeft() {
    const classes = useStyles()
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* NB: Making appbar position="relative" versus "fixed". */}
            <AppBar
                position="relative"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide,
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.flexDiv}>
                {/* <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        > */}
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: clsx(
                            classes.drawerPaper,
                            !open && classes.drawerPaperClose,
                        ),
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? (
                                <ChevronLeftIcon />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                            (text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <InboxIcon />
                                        ) : (
                                            <MailIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ),
                        )}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    {/* <div className={classes.drawerHeader} /> */}
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Rhoncus dolor purus non enim praesent
                        elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum
                        quisque non tellus. Convallis convallis tellus id
                        interdum velit laoreet id donec ultrices. Odio morbi
                        quis commodo odio aenean sed adipiscing. Amet nisl
                        suscipit adipiscing bibendum est ultricies integer quis.
                        Cursus euismod quis viverra nibh cras. Metus vulputate
                        eu scelerisque felis imperdiet proin fermentum leo.
                        Mauris commodo quis imperdiet massa tincidunt. Cras
                        tincidunt lobortis feugiat vivamus at augue. At augue
                        eget arcu dictum varius duis at consectetur lorem. Velit
                        sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit.
                        Fringilla est ullamcorper eget nulla facilisi etiam
                        dignissim diam. Pulvinar elementum integer enim neque
                        volutpat ac tincidunt. Ornare suspendisse sed nisi lacus
                        sed viverra tellus. Purus sit amet volutpat consequat
                        mauris. Elementum eu facilisis sed odio morbi. Euismod
                        lacinia at quis risus sed vulputate odio. Morbi
                        tincidunt ornare massa eget egestas purus viverra
                        accumsan in. In hendrerit gravida rutrum quisque non
                        tellus orci ac. Pellentesque nec nam aliquam sem et
                        tortor. Habitant morbi tristique senectus et. Adipiscing
                        elit duis tristique sollicitudin nibh sit. Ornare aenean
                        euismod elementum nisi quis eleifend. Commodo viverra
                        maecenas accumsan lacus vel facilisis. Nulla posuere
                        sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                </main>
            </div>
        </div>
    )
}
