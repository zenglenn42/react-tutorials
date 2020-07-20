import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles({
    form: {
        margin: '0 auto',
        textAlign: 'center',
        width: '356px',
    },
    input: {
        margin: '8px auto',
        fontSize: '150%',
        border: 'none',
        borderBottom: '1px solid lightgrey',
    },
})

const Submitted = (props) => {
    const { firstName, lastName, email } = props
    return (
        <>
            <br />
            <div>{'{'}</div>
            <div>
                {'"firstName": "'}
                {firstName}
                {'"'}
            </div>
            <div>
                {'"lastName": "'}
                {lastName}
                {'"'}
            </div>
            <div>
                {'"email": "'}
                {email}
                {'"'}
            </div>
            <div>{'}'}</div>
            <br />
        </>
    )
}

function MyForm(props) {
    const classes = useStyles()
    const [person, setPerson] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        if (person && person.email && person.firstName && person.lastName) {
            props.onSubmit(person)
            setPerson({})
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        if (!name) return

        const newPerson = {
            ...person,
            [name]: value,
        }
        setPerson(newPerson)
    }

    return (
        <div className={classes.form}>
            <form>
                <input
                    className={classes.input}
                    type="text"
                    name="firstName"
                    placeholder="first name"
                    onChange={handleChange}
                    value={person.firstName || ''}
                />
                <br />
                <input
                    className={classes.input}
                    type="text"
                    name="lastName"
                    placeholder="last name"
                    onChange={handleChange}
                    value={person.lastName || ''}
                />
                <br />
                <input
                    className={classes.input}
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                    value={person.email || ''}
                />
                <br />
                <Button onClick={handleSubmit} variant="contained" size="small">
                    Submit
                </Button>
            </form>
            <Submitted {...person} />
        </div>
    )
}

export default MyForm
