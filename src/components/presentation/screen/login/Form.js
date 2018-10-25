import React, { Component } from 'react'

import './Form.css'


class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user:{
				name:'',
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
	}

	inputData = (event) => {
		const { id, value } = event.target;

		this.setState(currentState => ({
			user: {
				...currentState.user,
				[id]:value
			}
		}))
	}

	changeInput = () => {
		this.setState(currentState => ({
			isLogin: !currentState.isLogin
		}))
	}

	render() {
		const { user, isLogin } = this.state

		return (
			<div className="login-wrap">
				<div className="login-html">

					<button className="" onClick={this.changeInput}> SIGN IN </button>

					<button className="tab" onClick={this.changeInput}> SIGN UP </button>

					<div className="login-form">

						{isLogin &&

							<form className="Component" onSubmit={this.login}>
								<label >E-mail</label>
								<input
									type="text"
									id="email"
									name="e-mail"
									value={user.login}
									onChange={this.inputData}
								/>

								<label > Password</label>
								<input
									type="text"
									id="pass"
									name="password"
									value={user.pass}
									onChange={this.inputData}
								/>

								<button> Login </button>

							</form>

						}
						{!isLogin &&

							<form className="Component" onSubmit={this.createUser}>
								<label >Name</label>
								<input
									type="text"
									id="name"
									name="Name"
									value={user.name}
									onChange={this.inputData}
								/>
								<label >E-mail</label>
								<input
									type="text"
									id="email"
									name="e-mail"
									value={user.email}
									onChange={this.inputData}
								/>

								<label > Password</label>
								<input
									type="text"
									id="pass"
									name="password"
									value={user.pass}
									onChange={this.inputData}
								/>
								<label >Confirm Password</label>

								<button> Inscrever </button>

							</form>
						}

					</div>

				</div>
			</div>
		)
	}
}

export default Form
