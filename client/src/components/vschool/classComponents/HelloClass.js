import React from 'react'

class HelloClass extends React.Component {
    render() {
        return (
            <div>
                <Header username="Mr. McGoo" />
                <Greeting />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return <p>Welcome, {this.props.username}!</p>
    }
}

class Greeting extends React.Component {
    getTimeOfDay(hours) {
        let timeOfDay = ''
        if (hours < 12) {
            timeOfDay = 'morning'
        } else if (hours < 17 && hours >= 12) {
            timeOfDay = 'afternoon'
        } else {
            timeOfDay = 'evening'
        }
        return timeOfDay
    }

    render() {
        const date = new Date()
        const hours = date.getHours()

        return <p>Good {this.getTimeOfDay(hours)} to you.</p>
    }
}

export default HelloClass
