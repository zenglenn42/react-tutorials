import React from "react"
import JokeItem from "./JokeItem"
import JokeData from "./api/JokeData"

function JokeList() {
    return (
        <div className="jokeList">
            {
                JokeData.map((jokeObj, index) => {
                    return <JokeItem 
                                question={jokeObj.question}
                                punchLine={jokeObj.punchLine}
                                key={index} />
                })
            }
        </div>
    )
}

export default JokeList
