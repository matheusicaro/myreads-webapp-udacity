import React from 'react'

import Menu from 'material-ui/svg-icons/navigation/menu'

import './Header.scss'
import ButtonsNavigate from './components/ButtonsNavigate'
import HeaderMenuNavigate from './components/HeaderMenu'
import { DrawerMenu as MenuToMobileDevices } from '../DrawerMenu'
import { Footer } from '../Footer'
import { LanguagesBtn } from '../LanguagesBtn'
import ChangeTheme from './components/ChangeTheme'
import { MyContext } from '../../Context'

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
    <MyContext.Consumer>
      {({ state }) => (

        <header className='header-container' style={{ }}>

          <menu className='header-menu-mobile-devices'>
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
          </menu>

          <div className={`header-footer header-footer-${state.theme}`}>
            <Footer
              tooltipGit={language.tooltipGit}
              tooltipFacebook={language.tooltipFacebook}
              tooltipLinkedin={language.tooltipLinkedin}
            />
          </div>

          <div className={`header-title header-title-${state.theme}`}>
            <h2> {language.title} </h2>
          </div>

          <div className={`header-navigate header-navigate-container header-navigate-${state.theme}`}>
            <div className='header-container'>
              <ChangeTheme select={changeTheme} />
              <LanguagesBtn changeLanguage={props.changeLanguage} button={language.buttonLanguage} />
            </div>
            <ButtonsNavigate language={language} />
          </div>

        </header>
      )}
    </MyContext.Consumer>
  )
}

export default Header
