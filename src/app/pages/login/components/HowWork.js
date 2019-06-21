import React from 'react'

import ButtonClose from './ButtonClose'

import './styles.css'
import './howWork.css'
import 'animate.css'

const HowWorkComponent = ({ language, closeHowWork }) => {
  return (
    <div className='parchment-secondary how-work-button-close animated bounceInDown'>
      <div className='parchment-secondary-container'>

        { language.contentHowWork.map((element, index) => <p key={index}> {element} </p>) }

        <ButtonClose closeLoginForm={closeHowWork} language={language.tooltipClose} />
      </div>
    </div>
  )
}

export default HowWorkComponent
