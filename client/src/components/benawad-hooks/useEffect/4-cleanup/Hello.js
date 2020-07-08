import React from 'react'

const Hello = () => {

    React.useEffect(()=> {
        console.log("render: effect called from <Hello>")
        return () => console.log("unmount: cleanup called from <Hello>")
    }, [])

    return (
        <div>
            Hello
        </div>
    )
}

export default Hello
