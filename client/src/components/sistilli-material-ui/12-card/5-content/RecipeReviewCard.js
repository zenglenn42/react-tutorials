import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { grey } from '@material-ui/core/colors';
import { Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 435,
    minWidth: 290,
    maxWidth: 290,
  },
  header: {
    minHeight: "92.05px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: grey[500],
  },
  actions: {
    // backgroundColor: grey[400]
    backgroundColor: "white"
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} {...props}>
      <CardHeader className={classes.header} />
      <Divider />
      <CardMedia
        className={classes.media}
        // image={imageUrl}
        title="Paella dish"
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the
            mussels, if you like.
          </Typography>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        {/* <Button variant="outlined" fullWidth>
          <Typography variant="body2" color="textSecondary" style={{textTransform: "none"}}>&nbsp;</Typography>
        </Button> */}
      </CardActions>
    </Card>
  );
}
