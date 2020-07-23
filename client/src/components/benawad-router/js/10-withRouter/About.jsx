/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'

const About = () => {
    const postId = 5
    return (
        <div>
            <div>About component</div>
            <Link to={`/posts/${postId}`}>
                <Button variant="contained">
                    <Typography style={{ textTransform: 'none' }}>
                        CHANGE TO '/posts/{postId}'
                    </Typography>
                </Button>
            </Link>
        </div>
    )
}

export default About
