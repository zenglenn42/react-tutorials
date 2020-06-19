import React from 'react'

const MyContext = React.createContext();

class MyProvider extends React.Component {
    state = {
        name: 'Wes',
        age: 100,
        cool: true
    }
    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                growYearOlder: () => this.setState({
                    age: this.state.age + 1
                })
            }}>
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
        const cake = <span role="img" area-label="cake emoji">🎂</span>
        return (
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            I am {context.state.name}
                            <p>Age: {context.state.age}</p>
                            <button onClick={() => context.growYearOlder()}>Happy Birthday {cake}</button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

class MutateContext extends React.Component {
    render() {
        return(
            <MyProvider>
                <div>
                    <p>I am an app</p>
                    <Family />
                </div>
            </MyProvider>
        )
    }
}

export default MutateContext