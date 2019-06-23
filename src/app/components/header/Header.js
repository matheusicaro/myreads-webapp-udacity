import React from 'react'

import Menu from 'material-ui/svg-icons/navigation/menu'

import './Header.css'
import ButtonsNavigate from './components/ButtonsNavigate'
import HeaderMenuNavigate from './components/HeaderMenu'
import { DrawerMenu as MenuToMobileDevices } from '../DrawerMenu'
import { Footer } from '../Footer'
import { LanguagesBtn } from '../LanguagesBtn'
import ChangeTheme from './components/ChangeTheme'

const Header = (props) => {
  const { language } = props
  const { actionOpenMenu, isOpenMenu } = props

  const getHeaderToMenuToMobileDevices = (
    <HeaderMenuNavigate
      language={language}
      logout={props.logout}
      changeLanguage={props.changeLanguage}
    />
  )

  const changeTheme = () => props.changeTheme()

  return (
    <div className='xheader-container'>

      <div className='header-menu-btn'>
        <MenuToMobileDevices
          topicsMenuDrawer={getHeaderToMenuToMobileDevices}
          openRigth={false}
          actionOpen={actionOpenMenu}
          isOpen={isOpenMenu}
          language={language.drawerMenu}
          icon={<Menu />}
          width={'80%'}
          styleButton={{ root: { background: '#0000008a', borderRadius: '25px' }, hover: '#000000' }}
        />
      </div>

      <Footer
        tooltipGit={language.tooltipGit}
        tooltipFacebook={language.tooltipFacebook}
        tooltipLinkedin={language.tooltipLinkedin}
      />

      <div className='xheader-title '>
        <h2> {language.title} </h2>
      </div>

      <div className='xheader-navigate-container'>
        <div className='xheader-container'>
          <ChangeTheme select={changeTheme} />
          <LanguagesBtn changeLanguage={props.changeLanguage} button={language.buttonLanguage} />
        </div>
        <ButtonsNavigate language={language} />
      </div>

    </div>
  )
}

export default Header
