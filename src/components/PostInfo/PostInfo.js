import React from 'react';
import './PostInfo.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

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
  rootBody: {
    marginTop: 30,
  },
});

const PostInfo = (props) => {
    const {title, body, id} = props.post;
    const classes = useStyles();

    const history = useHistory();

    const handleClick = (postId) =>{
        history.push(`/postDetail/${postId}`);
    }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent className={classes.media}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className={classes.rootBody} variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            
            <CardActions className="button">
                <Button onClick={()=>handleClick(id)} variant="contained" color="secondary">
                    See More
                </Button>
            </CardActions>            
        </Card>
    );
};

export default PostInfo;