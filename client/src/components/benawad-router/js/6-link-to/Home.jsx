import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Home = () => {
    return (
        <div>
            <div>Home component</div>
            <hr/>
            <Link to="/about">
                <Button variant="contained"> 
                    Change to '/about' Route (with Link)
                </Button>
            </Link>
        </div>
    )
}

export default Home
