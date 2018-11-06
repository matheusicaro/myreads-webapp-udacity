import React from 'react';
import { Route } from 'react-router-dom'

// Import Context
import { MyContext } from './Context'

import HeaderContainer from './components/container/HeaderContainer'

// Import pages
import HomeContainer from '../app/pages/home/HomeContainer'
import SearchContainer from '../app/pages/search/SearchContainer'
import LoginContainer from './pages/login/LoginContainer'



import Background from './media/images/default-background.jpg'

const Main = () => {

  const isAuthorized = ({ changeLanguage, state, hideBackground}) => {

    let styleHide = false;

    // const hideBackground = (value) =>{
    //   console.log(value);
    //   (value) ? styleHide={display:'none'} : styleHide=false;
    // }
  
    return (
    <section>
      <div style={style.backgroungImage} ></div>
      <HeaderContainer changeLanguage={changeLanguage} language={state.language}  background={hideBackground}/>
      <Route exact path='/' render={() => <HomeContainer language={state.language} styleHide={state.styleHide} />} ></Route>
      <Route exact path='/search' render={() => <SearchContainer language={state.language} />} ></Route>
    </section>
    )
  }

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