import React from "react"

const style = {
    flex: "1"
}

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            imgSrc: "https://i.imgflip.com/1bij.jpg",
            topText: "One does not merely",
            bottomText: "go shopping",
            allMemeImages: []
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch("https://api.imgflip.com/get_memes")
            .then( response => response.json() )
            .then( response => {
                const {memes} = response.data
                this.setState({
                    isLoading: false,
                    allMemeImages: memes
                })
            })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randomIndex = Math.floor(Math.random() * this.state.allMemeImages.length)
        this.setState({
            imgSrc: this.state.allMemeImages[randomIndex].url
        })
    }

    render() {
        return (
            <div style={style}>
                {
                    this.state.isLoading ? 
                        <h2>Loading ...</h2> : 
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="topText" value={this.state.topText} onChange={this.handleChange} placeholder="Top text" />
                                <br />
        
                                <input type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange} placeholder="Bottom text" />
                                <br />

                                <button>Gen</button>
                            </form>
                            <h1>{this.state.topText}</h1>
                            <img src={this.state.imgSrc} alt="random meme"/>
                            <h1>{this.state.bottomText}</h1>
                        </div>
                }
            </div>
        )
    }
}

export default MemeGenerator