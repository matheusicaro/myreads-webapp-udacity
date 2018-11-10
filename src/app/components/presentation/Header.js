/*
* DESCRIPTION
*
* this component is responsible for mounting the application header, 
* so it contains all navigation styles and buttons.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Arrow from 'material-ui/svg-icons/navigation/arrow-forward';
import Replay from 'material-ui/svg-icons/content/reply';
import IconButton from 'material-ui/IconButton';

// Import Components
import Icon from './Icon'
import { ICONS } from '../../media/icons/IconsSvg'
import LanguagesBtn from './LanguagesBtn'
import DrawerMenu from '../../components/presentation/DrawerMenu';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Home from 'material-ui/svg-icons/action/home';
import User from 'material-ui/svg-icons/action/account-box';
import Footer from './Footer'

// Import Styles
import '../../styles/components/Header.css';
import '../../styles/components/Footer.css';

const Header = (props) => {

  const header = props.language;
  const { actionOpenMenu, isOpenMenu } = props

  const headerMenuNavegate = (
    <React.Fragment>
      <div className="header-menuBtn-navegate">

        <div className="header-menuBtn-navegate-search">
          <div className="header-menuBtn-buttons">
            <Link to='/'>
              <FlatButton label={header.home} labelPosition="after" primary={true} icon={<Home />} />
            </Link>
          </div>
          <div className="header-menuBtn-buttons">
            <Link to='/user-profile'>
              <FlatButton label={header.profile} labelPosition="after" primary={true} icon={<User />} />
            </Link>
          </div>
          <div className="header-menuBtn-buttons">
            <Link to='/search'>
              <FlatButton label={header.addBooks} labelPosition="after" primary={true} icon={<Arrow />} />
            </Link>
          </div>
          <div className="header-menuBtn-buttons">
            <FlatButton label={header.logout} onClick={(props.logout)} labelPosition="after" primary={true} icon={<Replay />} />
          </div>
        </div>

        <LanguagesBtn changeLanguage={props.changeLanguage} button={header.buttonLanguage} />
      </div>
    </React.Fragment >

  )

  return (
    <div className='header'>

      <div className="header-menu-btn">
        <DrawerMenu
          topicsMenuDrawer={headerMenuNavegate}
          openRigth={false}
          actionOpen={actionOpenMenu}
          isOpen={isOpenMenu}
          language={header}
          icon={<Menu />}
          width={"60%"}
          styleButton={{ root: { background: '#0000008a', borderRadius: '25px' }, hover: '#000000' }}

        ></DrawerMenu>
      </div>

      <Footer tooltipGit={header.tooltipGit} tooltipFacebook={header.tooltipFacebook} tooltipLinkedin={header.tooltipLinkedin} color={styles.color}></Footer>

      <div className="header-title"><h2> {header.title} </h2></div>

      <div className="header-navegate">

        <div className="header-navegate-languages"><LanguagesBtn changeLanguage={props.changeLanguage} button={header.buttonLanguage} /></div>

        <div className="header-navegate-home-login ">
          <span className="b-hover IconButton"> <Link to='/'><IconButton tooltip={header.home}> <Icon icon={ICONS.HOME} color={styles.color} /> </IconButton></Link></span>
          <span className="b-hover IconButton"> <Link to='/user-profile'><IconButton tooltip={header.profile}><Icon icon={ICONS.USER} color={styles.color} /></IconButton></Link></span>
        </div>

        <div className="header-navegate-search">
          <Link to='/search' className="add-books">
            <FlatButton label={header.addBooks} labelPosition="before" primary={true} icon={<Arrow />} />
          </Link>
        </div>

        <div className="header-navegate-logout"><FlatButton label={header.logout} onClick={(props.logout)} labelPosition="after" primary={true} icon={<Replay />} /></div>
      </div>

    </div>
  )
}

export default Header

const styles = {
  translate: {
    minWidth: '0',
  },

  color: 'rgb(0, 151, 167)'
}