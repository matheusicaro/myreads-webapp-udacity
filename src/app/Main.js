import React from 'react';
import { Route } from 'react-router-dom'

// Import Context
import { MyContext } from './Context'

import Header from './components/Header'

// Import pages
import HomeContainer from '../app/pages/home/HomeContainer'
import SearchContainer from '../app/pages/search/SearchContainer'
import LoginContainer from './pages/login/LoginContainer'



import Background from './media/images/default-background.jpg'

const Main = () => {

  const isAuthorized = ({ changeLanguage, state }) => (
    <section>
      <div style={style.backgroungImage} ></div>
      <Header changeLanguage={changeLanguage} language={state.language} />
      <Route exact path='/' render={() => <HomeContainer language={state.language} />} ></Route>
      <Route exact path='/search' render={() => <SearchContainer language={state.language} />} ></Route>
    </section>
  )

  const notAuthorized = (context) => (
    <Route exact path='/' render={() => <LoginContainer isLogged={context.logon} />} ></Route>
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