/*
* DESCRIPTION
*
* Component responsible for the logic of the data passed
* in the visualization component 'Form'. Then it contains
* all user-entered data or login data, which then passes 
* to the parent control component 'loginContainer' through
* the properties.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React, { Component } from 'react'

import Form from './Form'

class FormContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {
				name: '',
				email: '',
				pass: '',
			},
			isLogin: true
		}
	}

	login = (event) => {
		event.preventDefault();

		const { user } = this.state;

		this.props.logon(user);
	}

	createUser = (event) => {
		event.preventDefault();

		const { user } = this.state;
		this.props.create(user);

		this.setState({
			isLogin: !this.state.isLogin,
			user: {
				name: '',
				email: '',
				pass: '',
			}
		})
	}

	inputData = (event) => {
		const { id, value } = event.target;

		this.setState(currentState => ({
			user: {
				...currentState.user,
				[id]: value
			}
		}))
	}

	changeInput = () => {
		this.setState(currentState => ({
			isLogin: !currentState.isLogin,
			user: {
				name: '',
				email: '',
				pass: '',
			}
		}))
	}

	render() {

		const { user, isLogin } = this.state;
		const { errorAcess } = this.props;

		return (
            <Form 
                isLogin={isLogin} 
                user={user} 
                errorAcess={errorAcess}

                changeInput={this.changeInput}
                inputData={this.inputData}
                createUser={this.createUser}
                login={this.login}
            ></Form>
		)
	}
}

export default FormContainer
