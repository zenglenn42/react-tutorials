import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

const About = () => {
    const postId = 5;
    return (
        <div>
            <div>About component</div>
            <Link to={`/posts/${postId}`}>
                <Button variant="contained"> 
                    <Typography style={{textTransform: "none"}}>
                        Change to '/posts/{postId}'
                    </Typography>
                </Button>
            </Link>
        </div>
    )
}

export default About
