import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
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
import TutorialList from './components/TutorialList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { FaReact as ReactIcon } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa'
import Paper from '@material-ui/core/Paper';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
import Tooltip from '@material-ui/core/Tooltip';
import TutorialSummary from './components/TutorialSummary'
import LandingPage from './components/LandingPage';
import TutorialContent from './components/TutorialContent';
import { useStyles } from './useStyles';


function getMainContent(mainContent, classes, handleDrawerOpen) {
    let content = null
    
    switch (mainContent.demoKey) {
      case "splash":
        content = <LandingPage classes={classes} handleDrawerOpen={handleDrawerOpen}/>
        break;

      case "summary":
        content = <TutorialSummary {...mainContent} />
        break;

      default:
        content = <TutorialContent classes={classes} mainContent={mainContent} />
    }
   
    return (
      <Paper className={classes.mainPaper} elevation={0}>
        {content}
      </Paper>
    )     
}

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mainContent, setMainContent] = React.useState({demoKey: props.main})

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleGoHome = () => {
    setMainContent({ demoKey: "splash" })
    setOpen(false);
  };

  const drawerCloseButton = (
    <IconButton onClick={handleDrawerClose}>
      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
  )

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
          <Tooltip title="react home" enterDelay={300}>
            <IconButton
                component="a"
                color="inherit"
                href="https://reactjs.org/"
                aria-label="react home"
                target="_blank"
              >
                <ReactIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" noWrap>
            {props.text||"Persistent drawer"}
          </Typography>
          <div className={classes.grow} />
          <Tooltip title="portfolio" enterDelay={300}>
            <IconButton
                component="a"
                color="inherit"
                href="https://zenglenn42.github.io/portfolio/"
                aria-label="portfolio"
                target="_blank"
              >
                <WorkIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="github" enterDelay={300}>
            <IconButton
                component="a"
                color="inherit"
                href="https://github.com/zenglenn42/react-tutorials"
                aria-label="github"
                target="_blank"
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
          {drawerCloseButton}
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton> */}
        </div>
        <Divider />
        <div className={classes.scrollableList}>
          <TutorialList setMainContent={setMainContent} closeButton={drawerCloseButton} />
        </div>
      </Drawer>

      <main 
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.appBarSpacer}/>
        {getMainContent(mainContent, classes, handleDrawerOpen)}
      </main>
      <div className={classes.grow}/>
      <div
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })} style={{backgroundColor: "gray"}}>
        <Toolbar variant="dense">
          <Typography noWrap>
            {"Incremental Industries \u00A9 2020"||"Persistent drawer"}
          </Typography>
          <div className={classes.grow} />
          {/* <Tooltip title="github" enterDelay={300}>
            <IconButton
                component="a"
                color="inherit"
                href="https://github.com/zenglenn42/react-tutorials"
                aria-label="github"
              >
                <GitHubIcon />
            </IconButton>
          </Tooltip> */}
        </Toolbar>
      </div>
    </div>
  );
}
