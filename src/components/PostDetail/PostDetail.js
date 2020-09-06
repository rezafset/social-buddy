import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import fakeData from '../../fakeData/user.js';
import './PostDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faHeading, faComment } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 0,
    paddingTop: '100%',
    // borderRadius:'50%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


// Dynamic Container start
const PostDetail = () => {
    const {postId} = useParams();
    const [postInfo, setPostInfo] = useState({});
    const[commentPerson, setCommentPerson] = useState({});

    const user = fakeData.find(user => user.id === postId );

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response=> response.json())
        .then(data=> setPostInfo(data))
    }, [])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments/${postId}`)
        .then(response=> response.json())
        .then(data=> setCommentPerson(data))
    }, [])

    // MU contain
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const history = useHistory();
    function handleClick(){
        history.push('/home');
    }

    return (    
        <div className="post-show">
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Social Buddy"
                    subheader="September 6, 2020"
                />
                <CardMedia
                    className={classes.media}
                    image={user.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <FontAwesomeIcon icon={ faHeading } /> {postInfo.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {postInfo.body}
                    </Typography>
                    <Typography  variant="body1" color="textPrimary" component="p">
                        User Details is given bellow:
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>The person who comment on the post:</Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            <FontAwesomeIcon icon={ faUser } /> {commentPerson.name}
                        </Typography>
                        <Typography paragraph>
                            <FontAwesomeIcon icon={ faEnvelope } /> {commentPerson.email}
                        </Typography>
                        <Typography paragraph>
                            <FontAwesomeIcon icon={ faComment } /> {commentPerson.body}
                        </Typography>
                        <Typography className="go-back">
                            <Button onClick={handleClick} variant="contained" color="secondary">Go Back Home</Button>
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

        </div>
    );
};

export default PostDetail;