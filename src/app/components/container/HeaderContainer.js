/*
* DESCRIPTION
*
* Component responsible for the logic of the data passed
* in the visualization component 'Search'. The data is updated 
* before the call in the api for a performasse in the front end,
* soon after the update, in the last life cycle of the 
* React update, the call is made in the api, and in case of an
* error is informed to the user if no, the user did not notice
* a communication delay.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React, { Component } from 'react'

import Header from '../presentation/Header'

class HeaderContainer extends Component {

    constructor() {
        super();
        this.state = {
            isOpenMenu: false,
        }
    }

    isOpenMenu = (isOpen) => {
        this.props.background(isOpen);
        this.setState({ isOpenMenu: isOpen })
    }

    render() {
        const { changeLanguage, logout, language } = this.props;
        const { isOpenMenu } = this.state

        return (
            <Header
                isOpenMenu={isOpenMenu}
                actionOpenMenu={this.isOpenMenu}
                changeLanguage={changeLanguage}
                language={language}
                logout={logout}
            >   
            </Header>
        )
    }
}

export default HeaderContainer
