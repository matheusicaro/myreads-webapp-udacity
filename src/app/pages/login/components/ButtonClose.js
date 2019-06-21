import React from 'react'

// Import Components
import Icon from '../../../components/presentation/Icon'
import { ICONS } from '../../../media/icons/IconsSvg'
import IconButton from 'material-ui/IconButton'

const ButtonClose = ({ closeLoginForm, language }) => {
  return (

    <div className='login-button-close'>
      <IconButton onClick={closeLoginForm} tooltip={language}>
        <Icon icon={ICONS.CLOSE} color={'color'} />
      </IconButton>
    </div>
  )
}

export default ButtonClose
