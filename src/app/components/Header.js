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
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import IconButton from 'material-ui/IconButton';

import Icon from './Icon'
import { ICONS } from './IconsSvg'

import '../styles/components/Header.css';

const Header = (props) => {

  const { language } = props;
  console.log(language)

  const options = () => (
    <Menu>
      <MenuItem primaryText="Maps" />
      <MenuItem primaryText="Books" />
      <MenuItem primaryText="Flights" />
      <MenuItem primaryText="Apps" />
    </Menu>
  )

  const changeToBr = () => {
    props.changeLanguage("PT")
  }

  const changeToEn = () => {
    props.changeLanguage("EN")
  }

  return (
    <div className='header'>

      <div className="header-social">

        <h4 className="header-social-copyright"> © Copyright 2018, Matheus Ícaro </h4>
        <div className="header-social-buttons ">
          <span className="b-hover IconButton"><IconButton href={url.git}> <Icon icon={ICONS.GITHUB} color={styles.color} /> </IconButton></span>
          <span className="b-hover IconButton"><IconButton href={url.linkedin}> <Icon icon={ICONS.LINKEDIN2} color={styles.color} /> </IconButton></span>
          <span className="b-hover IconButton"><IconButton href={url.facebook}> <Icon icon={ICONS.FACEBOOK} color={styles.color} /> </IconButton></span>
        </div>

      </div>

      <div className="header-title"><h2> My Reads </h2></div>

      <div className="header-navegate">

        <div className="header-navegate-translate">
          <FlatButton onClick={changeToBr} label="PT" labelPosition="before" primary={true} style={styles.translate} />
          <FlatButton onClick={changeToEn} label="EN" labelPosition="before" primary={true} style={styles.translate} />
        </div>

        <div className="header-navegate-home-login ">
          <span className="b-hover IconButton"> <Link to='/'><IconButton> <Icon icon={ICONS.HOME} color={styles.color} /> </IconButton></Link></span>
          <span className="b-hover IconButton"> <IconButton onClick={options} tooltip="Editar Profile"><Icon icon={ICONS.USER} color={styles.color} /></IconButton></span>
        </div>

        <div className="header-navegate-search">
          <Link to='/search' className="add-books">
            <FlatButton label="Adicionar Livros" labelPosition="before" primary={true} icon={<Arrow />} />
          </Link>
        </div>


      </div>

    </div>
  )
}

export default Header

const url = {
  git: "https://github.com/matheusicaro/my-reads-udacity",
  facebook: "https://www.facebook.com/matheus.icaro.5",
  linkedin: "https://www.linkedin.com/in/matheusicaro",
}

const styles = {
  translate: {
    minWidth: '0',
  },
  color: 'rgb(0, 151, 167)'
}