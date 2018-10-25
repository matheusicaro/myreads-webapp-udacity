import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';



import './Login.css'

import Form from './Form'

const Login = (props) => {


  const create = (user) =>{
    props.createUser(user)
  }

  const login = (user) =>{
    props.logon(user)
  }

  return (
    <div className="root">

      <Grid item xs={9} > 
        <div className="screen">
          Tela bonita
        </div>
      </Grid>

      <Grid item xs={3}>

        <Form create={create} logon={login}></Form>
      </Grid>

    </div >
  )
}

export default Login
