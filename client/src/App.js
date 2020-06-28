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
import TutorialList from './components/TutorialList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { FaReact as ReactIcon } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { MdTouchApp } from "react-icons/md";
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
import Tooltip from '@material-ui/core/Tooltip';
import TutorialSummary from './components/TutorialSummary'
import LandingData from './components/api/LandingData'
import { Grid } from '@material-ui/core';
import TutorialCard from './components/TutorialCard';

const drawerWidth = 255;

// backgroundImage: 'url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png")'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    // backgroundColor: "#b0b0b0",
    // backgroundImage: 'url("/assets/img/clean-textile.png")',
    backgroundColor: "white",
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: "none"
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
    marginRight: theme.spacing(1),
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
    backgroundColor: "white"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    // paddingLeft: theme.spacing(4),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.light
  },
  contentHeader: {
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
    padding: theme.spacing(1, 2),
    backgroundColor: "white"
  },
  button: {
    padding: theme.spacing(0, 1)
  },
  grow: {
    flex: '1 1 auto',
  },
  Demobar: {
    backgroundColor: theme.palette.primary.light,
    paddingLeft: "0.5em", 
    paddingRight: "0px",
    marginBottom: "1em"
  },
  scrollableList: {
    overflowY: "scroll"
  },
  scrollableListX: {
    overflowX: "scroll"
  }
}));

function getMainContent(mainContent, classes, handleDrawerOpen) {
    let content = null
    
    switch (mainContent.demoKey) {
      case "splash":
        content = (
            <div className={classes.scrollableListX}>
              <Typography variant="h4" gutterBottom> 
                {LandingData.callToActionHeader}
              </Typography>

              {LandingData.callToActionText.map((sentence) => {
                return (<Typography paragraph variant="h6">{sentence}</Typography>)
              })}
              <br/>

              <Button
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                variant="contained"
                color="primary"
                disableElevation
                size="large"
              >
                <MdTouchApp size="1.5em" style={{marginRight: "1em"}}/> 
                <Typography>{LandingData.getStartedText}</Typography>
              </Button>
              <br/><br/>
              <hr style={{color: "lightgray"}} />

              <br/>
              <Typography variant="h4" gutterBottom> 
                {LandingData.tutorialCardHeader}
              </Typography>
              <Typography paragraph variant="h6">
                {LandingData.tutorialCardText}
              </Typography>

              <Grid container direction="row" wrap="nowrap" spacing={2} >
                {LandingData.tutorialCardImages.map((imgSrc) => {
                  return (
                    <Grid item xs={12} sm={12} md={4} xl={4}>
                      <TutorialCard imageUrl={imgSrc} />
                    </Grid>
                  )
                })}
              </Grid>
              <br/>
              <hr style={{color: "lightgray"}} />
              <br/>
              <Typography variant="h4">
                {LandingData.splashSequenceHeader}
              </Typography>
              <br/>
              <Typography variant="h6">
                {LandingData.splashSequenceText}
              </Typography>
              <br/>
              <Typography paragraph variant="h6">
                {LandingData.splashSequenceBullets.map((sentence) => {
                  return (
                    <Typography variant="h6" style={{marginLeft: "2em"}}>
                      • {sentence}
                    </Typography>)
                })}
              </Typography>
              <br/>
              <Grid container="column" alignContent="center">
                <Grid container direction="row" alignItems="center" spacing={4}>
                  {LandingData.splashSequence.map((item) => {
                    return (
                      <>
                        <Grid item xs={12} sm={10}>
                          <Typography paragraph variant="h6">{item.text}</Typography>
                          <TutorialCard imageUrl={item.image} />
                          <br/>
                        </Grid>
                      </>
                    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                  })}
                </Grid>
              </Grid>
              <br/>
              <hr style={{color: "lightgray"}} />
              <br/>
              <Typography variant="h4">
                {LandingData.wrapupHeader}
              </Typography>
              <br/>
              <Typography variant="h6">
                {LandingData.wrapupText}
              </Typography>
              <br />
              <Button
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                variant="contained"
                color="primary"
                disableElevation
                size="large"
              >
                <MdTouchApp size="1.5em" style={{marginRight: "1em"}}/> 
                <Typography>{LandingData.getStartedText}</Typography>
              </Button>
            </div>
        )
        break;

      case "summary":
        content = (
          <TutorialSummary {...mainContent} />
        )
        break;

      default:
        content = (
          <div className={classes.scrollableListX}>
            <Toolbar className={classes.Demobar} variant="dense" >
            <Typography variant="h6" noWrap={true}>
              {mainContent.primaryText}: {mainContent.secondaryText}
            </Typography>
            <div className={classes.grow} />
            <Tooltip title={mainContent.refLink.tipText} enterDelay={300}>
              <IconButton
                  component="a"
                  color="inherit"
                  href={mainContent.refLink.href}
                  aria-label={mainContent.refLink.tipText}
                  target="_blank"
                >
                  {mainContent.refLink.icon}
              </IconButton>
            </Tooltip>
            <Tooltip title={mainContent.codeLink.tipText} enterDelay={300}>
              <IconButton
                  component="a"
                  color="inherit"
                  href={mainContent.codeLink.href}
                  aria-label={mainContent.codeLink.tipText}
                  target="_blank"
                >
                  {mainContent.codeLink.icon}
              </IconButton>
            </Tooltip>
            </Toolbar>
            {mainContent.demoComponent}
          </div>
        )
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
        <div className={classes.contentHeader}/>
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
