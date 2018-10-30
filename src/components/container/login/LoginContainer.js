import React, { Component } from 'react'

import Login from '../../presentation/screen/login/Login'


class LoginContainer extends Component {
    
    constructor() {
        super()
        this.state = {
            users: [],
            errorAcess:''
        }
    }


    logon = (user) =>{
        const { users } = this.state;

        if(users.length > 0) {
            users.map(userdb =>{
                if(userdb.email === user.email)
                    if(userdb.pass === user.pass)
                        this.props.isLogged(true)
                    else
                        this.setState({errorAcess: "E-mail ou senha inválidos!"})
                else
                        this.setState({errorAcess: "Usuario não encontrado!"})
            })
        }else{
            this.setState({errorAcess: "Usuario não encontrado!"})
        }
    }

    createUser = (user) =>{

        const { users }  = this.state
        const logins = [];

        if(users.length > 0){
            users.map(user => logins.push(user.email));
        }

        if(logins.indexOf(user.email) > -1)
            this.setState({errorAcess: "Este e-mail já encontra-se cadastrado!"})
        else{
            users.push(user);
            this.setState({
                users,
                errorAcess: ''
            })
            window.alert("CADASTRO EFETUADO COM SUCESSO!")
        }

    }



    render() {
        const {errorAcess} = this.state;
        
        return (
            <div>
                <Login logon={ this.logon } createUser={ this.createUser} errorAcess={errorAcess}> </Login>
            </div>
        )
    }
}

export default LoginContainer