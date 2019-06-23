import React from 'react'
import { Link } from 'react-router-dom'

import { FlatButton } from 'material-ui'
import Home from 'material-ui/svg-icons/action/home'
import User from 'material-ui/svg-icons/action/account-box'
import Replay from 'material-ui/svg-icons/content/reply'
import Arrow from 'material-ui/svg-icons/navigation/arrow-forward'
import { LanguagesBtn } from '../../LanguagesBtn'

const HeaderMenuNavigate = ({ language, logout, changeLanguage }) => {
  return (
    <React.Fragment>
      <div className='header-menuBtn-navegate'>

        <div className='header-menuBtn-navegate-search'>
          <div className='header-menuBtn-buttons'>
            <Link to='/'>
              <FlatButton label={language.home} labelPosition='after' primary icon={<Home />} />
            </Link>
          </div>
          <div className='header-menuBtn-buttons'>
            <Link to='/user-profile'>
              <FlatButton label={language.profile} labelPosition='after' primary icon={<User />} />
            </Link>
          </div>
          <div className='header-menuBtn-buttons'>
            <Link to='/search'>
              <FlatButton label={language.addBooks} labelPosition='after' primary icon={<Arrow />} />
            </Link>
          </div>
          <div className='header-menuBtn-buttons'>
            <Link to='/'>
              <FlatButton label={language.logout} onClick={(logout)} labelPosition='after' primary icon={<Replay />} />
            </Link>
          </div>
        </div>

        <LanguagesBtn changeLanguage={changeLanguage} button={language.buttonLanguage} />
      </div>
    </React.Fragment >
  )
}

export default HeaderMenuNavigate
