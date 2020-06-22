import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Home = ({history}) => {
    return (
        <div>
            <div>Home component</div>
            <hr/>
            <Link to="/about">
                <Button variant="contained"> 
                    Change to '/about' Route (with Link)
                </Button>
            </Link>
            <br /><br />
            <Button variant="contained" color="primary"
                onClick={() => {
                    // possible api call
                    // change to the about page
                    history.push('/about')
                }}
                >
                Change to '/about' Route (with history.push)
            </Button>
        </div>
    )
}

export default Home
