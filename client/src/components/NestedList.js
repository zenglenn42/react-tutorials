import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DemoGroupIcon from '@material-ui/icons/GroupWork';
import PlayDemoIcon from '@material-ui/icons/PlayCircleFilled';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);

  const [open, setOpen] = React.useState({
    "vschool.io": false,
    "Set 2": false
  });

  const handleClick = (e) => {
    const key = e.target.innerHTML
    const value = open[key]
    console.log("handleClick")
    console.log("key = ", key)
    console.log("value = ", value)
    console.log("target = ", e.target)
    setOpen({...open, [key]: !value})
  };
  
  const handleChoice = (e) => {
    const key = e.target.innerHTML
    console.log("key = ", key)
    switch(key) {
      case "Joke List":
        props.setMainContent("jokeList")
        break;

      case "Todo List":
        props.setMainContent("todo")
        break;

      case "Meme Generator":
        props.setMainContent("memeGenerator")
        break;

      default:
        props.setMainContent("splash")
        break;
    }
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Tutorial demos
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary="vschool.io" />
        {open["vschool.io"] ? <ExpandLess /> : <ExpandMore />}
      </ListItem >
      <Collapse in={open["vschool.io"]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={handleChoice}>
            <ListItemText primary="Joke List" />
          </ListItem>          
          <ListItem button className={classes.nested} onClick={handleChoice}>
            <ListItemText primary="Todo List" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={handleChoice}>
            <ListItemText primary="Meme Generator" />
          </ListItem>
        </List>
      </Collapse>

      {/* <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <DemoGroupIcon />
        </ListItemIcon>
        <ListItemText primary="Set 2" />
        {open["Set 2"] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open["Set 2"]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PlayDemoIcon />
            </ListItemIcon>
            <ListItemText primary="Todo List" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PlayDemoIcon />
            </ListItemIcon>
            <ListItemText primary="Meme Generator" />
          </ListItem>
        </List>
      </Collapse> */}
      
      {/* <ListItem button>
        <ListItemIcon>
          <DemoGroupIcon />
        </ListItemIcon>
        <ListItemText primary="Set 3" />
      </ListItem> */}
    </List>
  );
}
