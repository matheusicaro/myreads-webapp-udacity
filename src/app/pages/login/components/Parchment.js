import React from 'react'

import LanguagesBtn from '../../../components/presentation/LanguagesBtn'

import './parchment.css'
import './styles.css'
import 'animate.css'

const Parchment = (props) => {
  return (
    <div className='parchment animated bounceInDown delay-1s'>
      <div className='parchment-content'>

        <span className='languagesBtn-overwrite'>
          <LanguagesBtn
            changeLanguage={props.changeLanguage}
            button={props.language.buttonLanguage}
          />
        </span>

        <div className='parchment-text-title'>
          <span className='animated infinite flash slower' id='title'> { props.language.title } </span>
        </div>

        <div className='parchment-text-welcome'>
          <span className='animated zoomIn delay-3s'
            onAnimationIterationCapture={props.stopAnimeted} id='welcome'>  { props.language.welcome } </span>
        </div>

        <div className='parchment-button animated zoomIn delay-5s'>

          <span className='parchment-button-click' onClick={props.onclick} id='HowWork'> { props.language.howWork } </span>

          <span className='parchment-button-click' onClick={props.onclick}id='LoginForm'> { props.language.login } </span>
        </div>
      </div>
    </div >

  )
}

export default Parchment
