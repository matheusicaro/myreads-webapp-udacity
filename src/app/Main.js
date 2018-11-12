import React from 'react';
import { Route } from 'react-router-dom'

// Import Context
import { MyContext } from './Context'

import HeaderContainer from './components/container/HeaderContainer'

// Import pages
import Home from '../app/pages/home/HomeContainer'
import Search from '../app/pages/search/SearchContainer'
import Login from './pages/login/LoginContainer'
import User from './pages/user/UserContainer'

// Import Languages
import * as translations from './translations'

import './styles/slide-background.css'

const Main = () => {

  const isAuthorized = ({ changeLanguage, logOut, state, hideBackground}) => {
    console.log(translations)
    const { home, search, header, userProfile } = translations[state.language];

    return (
    <section>
      <div className="loader slider" style={style.backgroungImage} ></div>
      <HeaderContainer changeLanguage={changeLanguage} logout={logOut} language={header}  background={hideBackground}/>
      <Route exact path='/' render={() => <Home language={home} styleHide={state.styleHide} />} ></Route>
      <Route exact path='/search' render={() => <Search language={search} />} ></Route>
      <Route exact path='/user-profile' render={() => <User language={userProfile} />} ></Route>

    </section>
    )
  }

  const notAuthorized = ({logon, changeLanguage, state}) => {
    const { login } = translations[state.language];
    return <Route exact path='/' render={() => <Login isLogged={logon} language={login} changeLanguage={changeLanguage} />} ></Route>
  }

  return (
    <MyContext.Consumer>
      {(context) => (
        (context.state.auth) ? isAuthorized(context) : notAuthorized(context)
      )}
    </MyContext.Consumer>
  );
}

export default Main;

const style = {

  backgroungImage: {
    width: '100%',
    height: "100%",
    position: 'fixed',
    opacity: '0.2',
  }

}