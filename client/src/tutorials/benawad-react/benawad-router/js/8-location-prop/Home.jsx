import React from 'react'

const Home = ({ history, location }) => {
    return (
        <div>
            <div>Home component</div>
            <p>Received Route props:</p>
            <hr />
            location =<pre>{JSON.stringify(location, null, 2)}</pre>
        </div>
    )
}

export default Home
