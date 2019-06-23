import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'

// Import Components
import { Icon } from './'
import { ICONS } from '../media/icons/IconsSvg'

import './Footer.scss'

const url = {
  git: 'https://github.com/matheusicaro/my-reads-udacity',
  facebook: 'https://www.facebook.com/matheus.icaro.5',
  linkedin: 'https://www.linkedin.com/in/matheusicaro'
}

export const Footer = ({ tooltipGit, tooltipLinkedin, tooltipFacebook, color }) => {
  const icons = [
    { url: url.git, tooltip: tooltipGit, svg: ICONS.GITHUB },
    { url: url.facebook, tooltip: tooltipLinkedin, svg: ICONS.LINKEDIN2 },
    { url: url.linkedin, tooltip: tooltipFacebook, svg: ICONS.FACEBOOK }
  ]

  return (
    <div className='xfooter-container'>
      <h2 className='xfooter-text'> © Copyright 2018, Matheus Ícaro </h2>

      <div className=''>
        { icons.map(icon => (
          <IconButton
            tooltip={icon.tooltip}
            touch
            tooltipPosition='bottom-center'
            iconStyle={styles.smallIcon}
            style={styles.small}
            href={icon.url}
          >
            <Icon icon={icon.svg} color={color} size={styles.smallIcon} />
          </IconButton>
        ))}
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
  }
}

Footer.propTypes = {
  tooltipGit: PropTypes.string.isRequired,
  tooltipFacebook: PropTypes.string.isRequired,
  tooltipLinkedin: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}
