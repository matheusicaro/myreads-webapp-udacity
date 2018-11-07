import React, { Component  } from "react";
import serializeForm from 'form-serialize'

import User from './User'

class UserContainer extends Component{

    handleSubmit = (e) => {
        e.preventDefault()
        
        const values = serializeForm(e.target, { hash: true })
         if (this.props.onCreateContact) {
          this.props.onCreateContact(values)
        }
    }

    render() {
        return (
            <User></User>
        )
    }
}

export default UserContainer