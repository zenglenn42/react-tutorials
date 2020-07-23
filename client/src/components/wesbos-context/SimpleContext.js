import React from 'react'

const MyContext = React.createContext()

class MyProvider extends React.Component {
    state = {
        name: 'Wes',
        age: 100,
        cool: true
    }
    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

// Function-based stateless component.
const Family = (props) => (
    <div>
        <p>I am a family.</p>
        <Person />
    </div>
)

class Person extends React.Component {
    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {(context) => <p>I am {context.state.name} </p>}
                </MyContext.Consumer>
            </div>
        )
    }
}

class SimpleContext extends React.Component {
    render() {
        return (
            <MyProvider>
                <div>
                    <p>I am an app.</p>
                    <Family />
                </div>
                &lt;Person&gt; &lt;MyContext.Consumer&gt;(context) ={'>'} (I am{' '}
                {'{'}context.state.name{'}'}) &lt;MyContext.Consumer&gt;
                &lt;/Person&gt;
            </MyProvider>
        )
    }
}

export default SimpleContext
