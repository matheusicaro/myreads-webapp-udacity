/*
* DESCRIPTION
*
* This component is responsible for assembling all visual form and
* application access, all visual styles are controlled by this component.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/pages/Login.css'

const Form = (props) => {

	const { isLogin, user, errorAcess } = props;

	const changeInput = () => {
		props.changeInput();
	}

	const inputData = (event) => {
		props.inputData(event);
	}

	const createUser = (event) => {
		props.createUser(event);
	}

	const login = (event) => {
		props.login(event);
	}

	return (
		<div className="login-wrap" >
			<div className="login-html">

				<div className="buttons-sign-in-up" >
					<button onClick={changeInput} >{(isLogin) ? 'me inscrever?' : 'Efetuar Login'}</button>
				</div>

				<div className="hr"></div>


				<div className="login-form">

					{isLogin &&

						<form className="Component" onSubmit={login}>
							<div className="group">
								<label className="label">E-mail</label>
								<input
									className="input"
									type="text"
									id="email"
									name="e-mail"
									value={user.login}
									onChange={inputData}
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
									onChange={inputData}
									required={true}
								/>
							</div>

							{errorAcess && <label className="label" style={{ color: '#7d0d01' }}> {errorAcess} </label>}

							<div className="hr"></div>

							<div className="group">
								<button type="submit" className="button"> Login </button>
							</div>

						</form>

					}
					{!isLogin &&

						<form className="Component" onSubmit={createUser}>

							<div className="group">
								<label className="label">Name</label>
								<input
									className="input"
									type="text"
									id="name"
									name="Name"
									value={user.name}
									onChange={inputData}
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
									onChange={inputData}
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
									onChange={inputData}
									required={true}
								/>
							</div>

							{errorAcess && <label className="label" style={{ color: '#7d0d01' }}> {errorAcess} </label>}

							<div className="hr"></div>

							<div className="group">
								<button type="submit" className="button" > Inscrever </button>
							</div>

						</form>
					}
				</div>
			</div>
		</div >
	)
}

export default Form

Form.propTypes = {

	isLogin: PropTypes.bool.isRequired,
	user: PropTypes.object,
	errorAcess: PropTypes.string,

	inputData: PropTypes.func.isRequired,
	createUser: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired,
};