import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NestedList from './components/NestedList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { FaReact as ReactIcon, FaCopy } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa'
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { MdTouchApp } from "react-icons/md";
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import TodoList from './components/vschool/todo/TodoList'
import MemeGenerator from './components/vschool/memeGenerator/MemeGenerator'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  appBar: {
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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    // paddingLeft: theme.spacing(4),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  mainPaper: {
    padding: theme.spacing(1, 2)
  },
  button: {
    padding: theme.spacing(0, 1)
  },
  grow: {
    flex: '1 1 auto',
  },
}));

function getMainContent(mainContent, classes, handleDrawerOpen) {
    switch(mainContent) {
      case "todo":
        return (
          <Paper className={classes.mainPaper} elevation={0} >
            <Typography variant="h4" gutterBottom> 
              <ReactIcon/> Todo List
            </Typography>
            <TodoList />
          </Paper>
        )
        break;

      case "memeGenerator":
        return (
          <Paper className={classes.mainPaper} elevation={0} >
            <Typography variant="h4" gutterBottom> 
              <ReactIcon/> Meme Generator
            </Typography>
            <MemeGenerator />
          </Paper>
        )
        break;

      case "splash":
      default:
        return (
          <Paper className={classes.mainPaper} elevation={0} >
            <Typography variant="h4" gutterBottom> 
              <ReactIcon/> Learning React
            </Typography>
            <Typography paragraph>
              React is a <Link href="https://medium.com/techmagic/reactjs-vs-angular5-vs-vue-js-what-to-choose-in-2018-b91e028fa91d" rel="noreferrer" target="_blank">popular</Link> JavaScript library for building user interfaces.
            </Typography>
            <Typography paragraph>
              Here, I dive into various <Link href="https://reactjs.org/" rel="noreferrer" target="_blank">React</Link> tutorials and gather up my coding solutions to share with you.
            </Typography>
            <Button
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              variant="contained"
              color="default"
            >
              <MdTouchApp size="1.5em" style={{marginRight: "1em"}}/> <Typography variant="small">Get Started</Typography>
            </Button>
          </Paper>
        )
    }
}

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mainContent, setMainContent] = React.useState(props.main)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleGoHome = () => {
    setMainContent("splash")
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {props.text||"Persistent drawer"}
          </Typography>
          <div className={classes.grow} />
          <Tooltip title="github" enterDelay={300}>
            <IconButton
                component="a"
                color="inherit"
                href="https://github.com/zenglenn42/react-tutorials"
                aria-label="github"
              >
                <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <ListItemIcon>
            <IconButton onClick={handleGoHome}>
              <FaHome size="1em" />
            </IconButton>
          </ListItemIcon>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <NestedList setMainContent={setMainContent} />
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {getMainContent(mainContent, classes, handleDrawerOpen)}
      </main>
      <div className={classes.grow}/>
      <div
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })} style={{backgroundColor: "gray"}}>
        <Toolbar variant="dense">
          <Typography variant="h7" noWrap>
            {"Incremental Industries (c) 2020"||"Persistent drawer"}
          </Typography>
          <div className={classes.grow} />
          <Tooltip title="github" enterDelay={300}>
            <IconButton
                component="a"
                color="inherit"
                href="https://github.com/zenglenn42/react-tutorials"
                aria-label="github"
              >
                <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </div>
    </div>
  );
}
