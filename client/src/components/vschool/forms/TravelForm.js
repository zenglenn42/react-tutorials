import React from 'react'

class TravelForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: null,
            gender: '',
            destination: '',
            diet: {
                isVegetarian: false,
                isKosher: false,
                isLactoseFree: false,
            },
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        if (type === 'checkbox') {
            this.setState((prevState) => {
                return {
                    diet: {
                        ...prevState.diet,
                        [name]: checked,
                    },
                }
            })
        } else {
            this.setState({ [name]: value })
        }
    }

    handleSubmit(event) {
        alert('Form submitted.')
        event.preventDefault()
    }

    render() {
        let dietaryRestrictions = ''
        for (var key in this.state.diet) {
            if (this.state.diet[key]) {
                dietaryRestrictions += key + ' '
            }
        }
        dietaryRestrictions = dietaryRestrictions.replace(/is/g, '')
        return (
            <div>
                <h1>Welcome to Shoestring Airlines</h1>
                <h2>Please complete the following:</h2>
                <form onSubmit={this.handleSubmit}>
                    <hr />
                    <label>
                        Name <br />
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />{' '}
                        <br />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />{' '}
                        <br />
                    </label>
                    <hr />
                    <label>
                        Age <br />
                        <input
                            type="text"
                            name="age"
                            placeholder="Age"
                            value={this.state.age}
                            onChange={this.handleChange}
                        />
                    </label>
                    <hr />
                    <label>
                        Gender <br />
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={this.state.gender === 'male'}
                                onChange={this.handleChange}
                            />{' '}
                            male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={this.state.gender === 'female'}
                                onChange={this.handleChange}
                            />{' '}
                            female
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="non-binary"
                                checked={this.state.gender === 'non-binary'}
                                onChange={this.handleChange}
                            />{' '}
                            non-binary
                        </label>
                    </label>
                    <hr />
                    <label>
                        Flight destination: <br />
                        <select name="destination" onChange={this.handleChange}>
                            <option value="seattle">Seattle</option>
                            <option value="austin">Austin</option>
                            <option value="new york city">New York City</option>
                        </select>
                    </label>
                    <hr />
                    <label>
                        Dietary restrictions <br />
                        <label>
                            <input
                                type="checkbox"
                                name="isVegetarian"
                                checked={this.state.diet.isVegetarian}
                                onChange={this.handleChange}
                            />
                            Vegetarian
                        </label>{' '}
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="isKosher"
                                checked={this.state.diet.isKosher}
                                onChange={this.handleChange}
                            />
                            Kosher
                        </label>{' '}
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="isLactoseFree"
                                checked={this.state.diet.isLactoseFree}
                                onChange={this.handleChange}
                            />
                            Lactose free
                        </label>{' '}
                        <br />
                    </label>
                    <hr />
                    <button>Submit</button>
                </form>
                <br /> <br />
                <hr />
                <h3>First name: {this.state.firstName}</h3>
                <h3>Last name: {this.state.lastName}</h3>
                <h3>Age: {this.state.age}</h3>
                <h3>Gender: {this.state.gender}</h3>
                <h3>Location: {this.state.destination}</h3>
                <h3>Dietary restrictions: {dietaryRestrictions}</h3>
            </div>
        )
    }
}

function AppForm() {
    return <TravelForm />
}

export default AppForm
