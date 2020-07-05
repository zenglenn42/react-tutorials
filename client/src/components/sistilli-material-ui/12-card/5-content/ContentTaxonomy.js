import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader, CardMedia, Divider } from '@material-ui/core';

const lineHeight = 1.43
const lineHeight2x = lineHeight * 2

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 435,
    minWidth: 290,
    maxWidth: 290,
  },
  header: {
    // backgroundColor: grey[200],
    backgroundColor: "white",
    minHeight: "92.05px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  mediaLabel: {
    position: "relative",
    paddingTop: `${lineHeight}rem`,
    marginBottom: `-${lineHeight2x}rem`
  },
  content: {
    // backgroundColor: grey[300]
    backgroundColor: "white",
    paddingTop: "8px",
    paddingBottom: 0
  },
  grow: {
    // flex: 1,
    // backgroundColor: grey[300]
    backgroundColor: "white"
  },
  actions: {
    // backgroundColor: grey[400]
    backgroundColor: "white"
  },
});

export default function ComplexCarTaxonomy(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} {...props}>
      <CardHeader className={classes.header} titleTypographyProps={{variant: 'body2', align: 'center', color: 'textSecondary'}}
        title="CardHeader"
      />
      <Divider />
      <Typography className={classes.mediaLabel} color="textSecondary" variant="body2" align="center">CardMedia</Typography>
      <CardMedia
        className={classes.media}
        // image="/assets/img/sistilli-templates/gradient.png"
        title="CardMedia"
      />
      <Divider />
      <CardContent className={classes.content}>
        <Typography
          className={classes.title}
          color="textPrimary"
          gutterBottom
          align="center"
          variant="body2"
        >
        </Typography>
        <Typography component="p" variant="caption" >{'<CardContent>'}</Typography>
        <Typography component="p" variant="caption" >&nbsp;&nbsp;{'<Typography>'}</Typography>
        <Typography component="p" variant="caption" >&nbsp;&nbsp;&nbsp;&nbsp;{'This impressive paella ...'}</Typography>
        <Typography component="p" variant="caption" >&nbsp;&nbsp;{'</Typography>'}</Typography>
        <Typography component="p" variant="caption" >{'</CardContent>'}</Typography>
      </CardContent>
      <div className={classes.grow} />
      <Divider />
      <CardActions className={classes.actions}>
        <Button variant="outlined" fullWidth>
          <Typography variant="body2" color="textSecondary" style={{textTransform: "none"}}>CardActions</Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
