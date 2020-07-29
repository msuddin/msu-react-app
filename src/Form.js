import React, { Component } from 'react'

class Form extends Component {

    // Set the component states
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    // Component handellers to handle any changes
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleOnSubmit = async (event) => {
        event.preventDefault()

        const response = await fetch(`http://localhost:8080/login/${this.state.username}/${this.state.password}`)
            .then((res) => res.json())

        alert(response.message)
    }

    render() {
        return (
            // The form below will simply render the component but not prodive any functionality
            // Constructor above is needed to provide functionality
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label>Username: </label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type='text' value={this.state.password} onChange={this.handlePasswordChange} />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        )
    }
}

export default Form