import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'

const Home = () => {
    return (
        <div>
            <div>Home component</div>
            <hr />
            <Link to="/about">
                <Button variant="contained">
                    <Typography style={{ textTransform: 'none' }}>
                        Change to '/about' route (with Link)
                    </Typography>
                </Button>
            </Link>
        </div>
    )
}

export default Home
