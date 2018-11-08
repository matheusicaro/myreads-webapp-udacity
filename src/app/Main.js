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



import Background from './media/images/default-background.jpg'

const Main = () => {

  const isAuthorized = ({ changeLanguage, logOut, state, hideBackground}) => {

    return (
    <section>
      <div style={style.backgroungImage} ></div>
      <HeaderContainer changeLanguage={changeLanguage} logout={logOut} language={state.language}  background={hideBackground}/>
      <Route exact path='/' render={() => <Home language={state.language} styleHide={state.styleHide} />} ></Route>
      <Route exact path='/search' render={() => <Search language={state.language} />} ></Route>
      <Route exact path='/user-profile' render={() => <User language={state.language} />} ></Route>

    </section>
    )
  }

  const notAuthorized = (context) => (
    <Route exact path='/' render={() => <Login isLogged={context.logon} />} ></Route>
  )

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
    background: `url(${Background})`,
  }

}