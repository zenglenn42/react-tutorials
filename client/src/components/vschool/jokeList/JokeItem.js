import React from "react"

function JokeItem(props) {
    let jokeQuestion = props.question ?
        <p>Q: {props.question}</p> : null;
    return (
        <div className="jokeItem">
            {jokeQuestion}
            <p><span role="img" aria-label="smilely">😁</span> {props.punchLine}</p>
            <hr/>
        </div>
    )
}

export default JokeItem