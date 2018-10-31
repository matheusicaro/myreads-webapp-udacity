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
import Icon from './icons/icon'
import { ICONS } from './icons/icons'

import './Header.css';

const Header = (props) => {

  const {language} = props;
  console.log(language)

  const options = () => (
    <Menu>
      <MenuItem primaryText="Maps" />
      <MenuItem primaryText="Books" />
      <MenuItem primaryText="Flights" />
      <MenuItem primaryText="Apps" />
    </Menu>
  )

  const changeToBr = () =>{
    props.changeLanguage("PT")
  }

  const changeToEn = () =>{
    props.changeLanguage("EN")
  }

  return (
    <div className='header'>

      <div className="header-social">
        <div className="powered"> © 2018, by Matheus Ícaro</div>
        <div className="button-hover"><IconButton tooltip={ (language === 'PT') ? PT.buttonGit : EN.buttonGit } href={url.git}> <Icon icon={ICONS.GITHUB} color='rgb(0, 151, 167)' /> </IconButton></div>
        <div className="button-hover"><IconButton tooltip={ (language === 'PT') ? PT.buttonGit : EN.buttonGit } href={url.linkedin}> <Icon icon={ICONS.LINKEDIN2} color='rgb(0, 151, 167)' /> </IconButton></div>
        <div className="button-hover"><IconButton tooltip={ (language === 'PT') ? PT.buttonGit : EN.buttonGit }> <Icon icon={ICONS.FACEBOOK} color='rgb(0, 151, 167)' /> </IconButton></div>
      </div>

      <div className="tittle">
        <div>Welcome My Reads</div>
      </div>

      <div className="header-navegate">

        <div className="buttons-translate">
          <FlatButton onClick={changeToBr} label="PT" labelPosition="before" primary={true} style={styles.translate}/>
          <FlatButton onClick={changeToEn} label="EN" labelPosition="before" primary={true} style={styles.translate}/>
        </div>

        <Link to='/'>
          <div className="button-hover"><IconButton> <Icon icon={ICONS.HOME} color='rgb(0, 151, 167)' /> </IconButton></div>
        </Link>

        <div className="button-hover"><IconButton onClick={options} tooltip="Editar Profile"> <Icon icon={ICONS.USER} color='rgb(0, 151, 167)' /></IconButton></div>

        <Link to='/search-books' >
          <FlatButton
            label="Adicionar Livros"
            labelPosition="before"
            primary={true}
            icon={<Arrow
            />}
          />
        </Link>

      </div>
    </div>
  )
}

export default Header
  
const PT = {
    buttonGit: 'Código Repositorio',
    buttonLinkedin: 'Linkedin Matheus',
    buttonFacebook: 'Facebook Matheus',

    profile: 'Editar Profile',
    searchBooks: 'Adicionar Livros'
}
const EN = {
    buttonGit: 'TTTT',
    buttonLinkedin: 'EEE ',
    buttonFacebook: 'AAAAA ',

    profile: 'SSSSS ',
    searchBooks: 'BBBBB ',
}


const url = {
  git: "https://github.com/matheusicaro/my-reads-udacity",
  facebook: "https://www.facebook.com/matheus.icaro.5",
  linkedin: "https://www.linkedin.com/in/matheusicaro",

}

const styles = {
  translate:{
    minWidth: '0',
  }
}