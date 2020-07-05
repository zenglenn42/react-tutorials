import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import grey from '@material-ui/core/colors/grey'
import { CardHeader, Avatar, IconButton, Tooltip, CardContent, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 435,
    minWidth: 290,
    maxWidth: 290,
  },
  header: {
    backgroundColor: grey[200],
    minHeight: "92.05px"
  },
  avatar: {
    backgroundColor: grey[500],
  },
});

export default function ComplexCarTaxonomy(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} {...props}>
      <CardHeader 
        className={classes.header}
        avatar={
          <Tooltip title="avatar={<Avatar/>}" enterDelay={300}>
            <Avatar aria-label="avatar" className={classes.avatar}>
              A
            </Avatar>
          </Tooltip>
        }
        title="title"
        subheader="subheader"
        subheaderTypographyProps={{style: {fontStyle: "oblique"}}}
        action={
        <Tooltip title="action={<icon/>}" enterDelay={300}>
          <IconButton aria-label="action">
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        }
      />
      <CardContent>
        <Typography component="p" variant="caption" >{'<CardHeader>'}</Typography>
        <Typography component="p" variant="caption" >&nbsp;&nbsp;{'avatar={<Avatar>A</Avatar>}'}</Typography>
        <Typography component="p" variant="caption" >&nbsp;&nbsp;{'title="title"'}</Typography>
        <Typography component="p" variant="caption" >&nbsp;&nbsp;{'subheader="subheader"'}</Typography>
        <Typography component="p" variant="caption" >&nbsp;&nbsp;{'subheaderTypographyProps="{{style: {fontStyle: oblique}}}"'}</Typography>
        <Typography component="p" variant="caption" >&nbsp;&nbsp;{'action={<IconButton><MoreVertIcon/></IconButton>}'}</Typography>
        <Typography component="p" variant="caption" >{'</CardHeader>'}</Typography>
      </CardContent>
    </Card>
  );
}