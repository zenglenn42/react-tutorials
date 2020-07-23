import React from 'react'

const Post = ({ history, location, match }) => {
    return (
        <div>
            <div>Post component</div>
            <p>Received Route props:</p>
            <hr />
            match =<pre>{JSON.stringify(match, null, 2)}</pre>
        </div>

        // Could use for post api call
        // React.useEffect(() => {
        //    fetch(`api.example.com/posts/${match.params.id}`)
        // }, [match.params.id])
    )
}

export default Post
