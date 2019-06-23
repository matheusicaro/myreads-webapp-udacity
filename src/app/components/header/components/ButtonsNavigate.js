import React from 'react'
import { Link } from 'react-router-dom'

import { IconButton, FlatButton } from 'material-ui'
import Search from 'material-ui/svg-icons/action/search'

import { Icon } from '../../'
import { ICONS } from '../../../media/icons/IconsSvg'

import './ButtonsNavigate.css'

const ButtonsNavigate = ({ language }) => {
  return (

    <div className='ButtonsNavigate-container'>

      <Link to='/'>
        <IconButton
          tooltip={language.home}
          touch
          tooltipPosition='bottom-center'
          iconStyle={styles.smallIcon}
          style={styles.small}
        >
          <Icon icon={ICONS.HOME} size={styles.smallIcon} />
        </IconButton>
      </Link>

      <Link to='/user-profile'>
        <IconButton
          tooltip={language.profile}
          touch
          tooltipPosition='bottom-center'
          iconStyle={styles.smallIcon}
          style={styles.small}
        >
          <Icon icon={ICONS.USER} size={styles.smallIcon} />
        </IconButton>
      </Link>

      <Link to='/search'>
        <FlatButton label={language.addBooks} labelPosition='before' primary icon={<Search />} />
      </Link>

    </div>
  )
}

const styles = {
  translate: {
    minWidth: '0'
  },

  smallIcon: {
    width: 30,
    height: 30
  },
  small: {
    width: 72,
    height: 72,
    padding: 16
  }
}

export default ButtonsNavigate
