/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    form: {
        margin: '0 auto',
        textAlign: 'center',
        width: '356px'
    },
    input: {
        margin: '8px auto',
        fontSize: '150%',
        border: 'none',
        borderBottom: '1px solid lightgrey'
    }
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

function MyForm({ onSubmit }) {
    const classes = useStyles()
    const [person, setPerson] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        if (!name) return

        const newPerson = {
            ...person,
            [name]: value
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
                <Button
                    disabled
                    variant="outlined"
                    onClick={handleSubmit}
                    size="small"
                >
                    Submit
                </Button>
            </form>
            <Submitted {...person} />
        </div>
    )
}

export default MyForm
