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

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Select a demo ...
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <DemoGroupIcon />
        </ListItemIcon>
        <ListItemText primary="vschool.io course" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PlayDemoIcon />
            </ListItemIcon>
            <ListItemText primary="Todo MVC" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PlayDemoIcon />
            </ListItemIcon>
            <ListItemText primary="Meme Generator" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <DemoGroupIcon />
        </ListItemIcon>
        <ListItemText primary="Set 2" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DemoGroupIcon />
        </ListItemIcon>
        <ListItemText primary="Set 3" />
      </ListItem>
    </List>
  );
}
