import React from 'react';
import './NotFound.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const NotFound = () => {
    return (
        <div className="notFound">
            <Card className="body">
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            404 Error!! Page Not Found
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="button">
                    <Button variant="contained" color="primary">
                        Back to Home
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default NotFound;