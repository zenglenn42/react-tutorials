import { makeStyles } from "@material-ui/core";

const drawerWidth = 255;

export const useStyles = makeStyles((theme) => ({
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