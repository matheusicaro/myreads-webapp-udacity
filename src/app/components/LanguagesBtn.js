import React from 'react'

import IconButton from 'material-ui/IconButton'
import Brazil from '../media/icons/brazil.svg'
import USA from '../media/icons/usa.svg'
import Spain from '../media/icons/spain.svg'

import './LanguagesBtn.css'

export const LanguagesBtn = (props) => {
  const changeToBr = () => {
    props.changeLanguage('pt-BR')
  }

  const changeToEn = () => {
    props.changeLanguage('en-US')
  }

  const changeToEs = () => {
    props.changeLanguage('es-ES')
  }

  const { button } = props

  return (
    <div style={{ display: 'flex' }}>
      <div className='b-hover b-hover-overwrite IconButton'>
        <IconButton style={styles.icon.brazil} onClick={changeToBr} touch tooltip={button.BR} tooltipStyles={styles.tooltip} />
      </div>
      <div className='b-hover b-hover-overwrite IconButton'>
        <IconButton style={styles.icon.usa} onClick={changeToEn} touch tooltip={button.EN} tooltipStyles={styles.tooltip} />
      </div>
      <div className='b-hover b-hover-overwrite IconButton'>
        <IconButton style={styles.icon.spain} onClick={changeToEs} touch tooltip={button.ES} tooltipStyles={styles.tooltip} />
      </div>
    </div>
  )
}

const styles = {

  smallIcon: {
    width: 30,
    height: 30
  },
  small: {
    width: 72,
    height: 72,
    padding: 16
  },

  tooltip: {
    background: 'rgba(0,0,0,0)'
  },

  icon: {
    brazil: {
      background: `url(${Brazil})`,
      backgroundSize: '50%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    usa: {
      background: `url(${USA})`,
      backgroundSize: '50%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    spain: {
      background: `url(${Spain})`,
      backgroundSize: '50%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }
}
