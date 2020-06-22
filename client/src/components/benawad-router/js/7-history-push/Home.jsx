import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'

const Home = ({history}) => {
    return (
        <div>
            <div>Home component</div>
            <hr/>
            <Link to="/about">
                <Button variant="contained"> 
                    <Typography style={{textTransform: "none"}}>
                        Change to '/about' route ( with Link )
                    </Typography>   
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
                <Typography style={{textTransform: "none"}}>
                    Change to '/about' route ( with history.push() )
                </Typography>  
            </Button>
        </div>
    )
}

export default Home
