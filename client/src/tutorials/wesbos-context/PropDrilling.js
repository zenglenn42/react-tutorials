import React from 'react'

// Function-based stateless component.
const Family = (props) => (
    <div>
        <p>I am a family.</p>
        <Person name={props.name} />
    </div>
)

class Person extends React.Component {
    render() {
        return (
            <div>
                <p>I am {this.props.name} </p>
            </div>
        )
    }
}

class PropDrilling extends React.Component {
    state = {
        name: 'Wes',
        age: 100,
        cool: true
    }

    render() {
        return (
            <div>
                <p>I am an app.</p>
                <Family name={this.state.name} />
                <p>
                    &lt;App&gt; &lt;Family name="{this.state.name}" &gt;
                    &lt;Person name="{this.state.name}" /&gt; &lt;/Family&gt;
                    &lt;/App&gt;
                </p>
            </div>
        )
    }
}

export default PropDrilling
