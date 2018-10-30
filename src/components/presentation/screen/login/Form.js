import React, { Component } from 'react'

import './Form.css'


class Form extends Component {

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
			<div className="login-wrap">
				<div className="login-html">

					<div className="buttons-sign-in-up" >
						<button onClick={this.changeInput} >{(isLogin) ? 'me inscrever?' : 'Efetuar Login'}</button>
					</div>

					<div className="hr"></div>


					<div className="login-form">

						{isLogin &&

							<form className="Component" onSubmit={this.login}>
								<div className="group">
									<label className="label">E-mail</label>
									<input
										className="input"
										type="text"
										id="email"
										name="e-mail"
										value={user.login}
										onChange={this.inputData}
										required={true}
									/>
								</div>

								<div className="group">
									<label className="label"> Password</label>
									<input
										className="input"
										type="password"
										id="pass"
										name="password"
										value={user.pass}
										onChange={this.inputData}
										required={true}
									/>
								</div>

								{ errorAcess && <label className="label" style={{color: '#7d0d01'}}> {errorAcess} </label> }

								<div className="hr"></div>

								<div className="group">
									<button type="submit" className="button"> Login </button>
								</div>

							</form>

						}
						{!isLogin &&

							<form className="Component" onSubmit={this.createUser}>

								<div className="group">
									<label className="label">Name</label>
									<input
										className="input"
										type="text"
										id="name"
										name="Name"
										value={user.name}
										onChange={this.inputData}
										required={true}
									/>
								</div>

								<div className="group">
									<label className="label">E-mail</label>
									<input
										className="input"
										type="text"
										id="email"
										name="e-mail"
										value={user.email}
										onChange={this.inputData}
										required={true}
									/>
								</div>

								<div className="group">
									<label className="label"> Password</label>
									<input
										className="input"
										type="password"
										id="pass"
										name="password"
										value={user.pass}
										onChange={this.inputData}
										required={true}
									/>
								</div>

								{ errorAcess && <label className="label" style={{color: '#7d0d01'}}> {errorAcess} </label> }

								<div className="hr"></div>

								<div className="group">
									<button type="submit" className="button" > Inscrever </button>
								</div>

							</form>
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Form
