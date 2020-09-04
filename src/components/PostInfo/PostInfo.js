import React from 'react';
import './PostInfo.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 390,
    height: 300,
    marginTop: 15,
    marginBottom: 15,
  },
  media: {
    height: 240,
  },
});

const PostInfo = (props) => {
    const {title, body, id} = props.post;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent className={classes.media}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Link to={"/info/"+id}>
                <CardActions className="button">
                    <div>
                        <Button className="btn-text" variant="contained" color="secondary">
                         Secondary
                       </Button>
                    </div>
                </CardActions>
            </Link>
        </Card>
    );
};

export default PostInfo;