import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton';

// Import Components
import Icon from './Icon'
import { ICONS } from '../../media/icons/IconsSvg'

import '../../styles/components/Header.css'

const Footer = ({tooltipGit, tooltipLinkedin, tooltipFacebook, color }) => {
    return (
        <div className="footer-social footer-social-xs">
            <h4 className="footer-social-copyright footer-social-copyright-xs"> © Copyright 2018, Matheus Ícaro </h4>
            <div className="footer-social-btn footer-social-btn-xs">
                <span className="b-hover IconButton"><IconButton href={url.git} tooltip={tooltipGit}> <Icon icon={ICONS.GITHUB} color={color} /> </IconButton></span>
                <span className="b-hover IconButton"><IconButton href={url.linkedin} tooltip={tooltipLinkedin}> <Icon icon={ICONS.LINKEDIN2} color={color} /> </IconButton></span>
                <span className="b-hover IconButton"><IconButton href={url.facebook} tooltip={tooltipFacebook} > <Icon icon={ICONS.FACEBOOK} color={color} /> </IconButton></span>
            </div>
        </div>
    )
}

export default Footer

const url = {
    git: "https://github.com/matheusicaro/my-reads-udacity",
    facebook: "https://www.facebook.com/matheus.icaro.5",
    linkedin: "https://www.linkedin.com/in/matheusicaro",
}

Footer.propTypes = {
    tooltipGit: PropTypes.string.isRequired,
    tooltipFacebook: PropTypes.string.isRequired,
    tooltipLinkedin: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };


