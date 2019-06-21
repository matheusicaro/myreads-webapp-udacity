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

import './styles.css'
import './form.css'

const Form = (props) => {
  const { isLogin, user, errorAcess, language } = props

  const changeInput = () => {
    props.changeInput()
  }

  const inputData = (event) => {
    props.inputData(event)
  }

  const createUser = (event) => {
    props.createUser(event)
  }

  const login = (event) => {
    props.login(event)
  }

  return (
    <div className='login-wrap' >
      <div className='login-html'>

        <div className='buttons-sign-in-up' >
          <button onClick={changeInput} >{(isLogin) ? language.inscribeClick : language.loginClick }</button>
        </div>

        <div className='hr' />

        <div className='login-form'>

          {isLogin &&

          <form className='Component' onSubmit={login}>
            <div className='group'>
              <label className='label'>{language.labelEmail}</label>
              <input
                className='input'
                type='text'
                id='email'
                name='email'
                value={user.login}
                onChange={inputData}
                required
              />
            </div>

            <div className='group'>
              <label className='label'> {language.labelPassword}</label>
              <input
                className='input'
                type='password'
                id='pass'
                name='password'
                value={user.pass}
                onChange={inputData}
                required
              />
            </div>

            {errorAcess && <label className='label' style={{ color: '#7d0d01' }}> {errorAcess} </label>}

            <div className='hr' />

            <div className='group'>
              <button type='submit' className='button'> {language.btnLogin} </button>
            </div>

          </form>

          }
          {!isLogin &&

          <form className='Component' onSubmit={createUser}>

            <div className='group'>
              <label className='label'>{language.labelName}</label>
              <input
                className='input'
                type='text'
                id='name'
                name='name'
                value={user.name}
                onChange={inputData}
                required
              />
            </div>

            <div className='group'>
              <label className='label'>{language.labelEmail}</label>
              <input
                className='input'
                type='text'
                id='email'
                name='email'
                value={user.email}
                onChange={inputData}
                required
              />
            </div>

            <div className='group'>
              <label className='label'> {language.labelPassword}</label>
              <input
                className='input'
                type='password'
                id='pass'
                name='password'
                value={user.pass}
                onChange={inputData}
                required
              />
            </div>

            {errorAcess && <label className='label' style={{ color: '#7d0d01' }}> {errorAcess} </label>}

            <div className='hr' />

            <div className='group'>
              <button type='submit' className='button' > {language.btnRegister} </button>
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
  login: PropTypes.func.isRequired
}
