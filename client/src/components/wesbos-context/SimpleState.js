import React from 'react'

class Person extends React.Component {
    render() {
        return (
            <div>
                <p>I am {this.props.name} </p>
            </div>
        )
    }
}

class SimpleState extends React.Component {
    state = {
        name: 'Wes',
        age: 100,
        cool: true
    }

    render() {
        return(
            <div>
                <p>I am an app.</p>
                <Person name={this.state.name} />
                <p>
                    &lt;App&gt;
                        &lt;Person name="{this.state.name}" /&gt;
                    &lt;/App&gt;
                </p>
            </div>
        )
    }
}

export default SimpleState