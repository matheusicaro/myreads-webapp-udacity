import React, { Component } from 'react'

import Login from '../../presentation/screen/login/Login'


class LoginContainer extends Component {
    
    constructor() {
        super()
        this.state = {
            users: []
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
                        window.alert("password errado")
                else
                    window.alert("usuario não cadastrado")
            })
        }else{
            window.alert("nenhum usuario no banco")
        }
    }

    createUser = (user) =>{

        const { users }  = this.state
        const logins = [];

        if(users.length > 0){
            users.map(user => logins.push(user.email));
        }

        if(logins.indexOf(user.email) > -1)
            window.alert("ja contem esse usuario")
        else{
            users.push(user);
            this.setState({
                users
            })
            window.alert("SUCESSO ADICIONADO")
        }

    }



    render() {

        return (
            <div>
                <Login logon={ this.logon } createUser={ this.createUser}> </Login>
            </div>
        )
    }
}

export default LoginContainer