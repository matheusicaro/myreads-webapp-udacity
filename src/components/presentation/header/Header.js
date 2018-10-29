import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Arrow from 'material-ui/svg-icons/navigation/arrow-forward';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Icon from './icons/icon'
import { ICONS } from './icons/icons'

import './Header.css';

const Header = () => {

  return (
    <div className='header'>

      <div className="header-social">
        <div className="powered"> © 2018, by Matheus Ícaro. </div>        
        <div className="button-hover"><IconButton href={url.git}> <Icon icon={ICONS.GITHUB} color='rgb(0, 151, 167)' /> </IconButton></div>
        <div className="button-hover"><IconButton href={url.linkedin}> <Icon icon={ICONS.LINKEDIN2} color='rgb(0, 151, 167)' /> </IconButton></div>
        <div className="button-hover"><IconButton href={url.facebook}> <Icon icon={ICONS.FACEBOOK} color='rgb(0, 151, 167)' /> </IconButton></div>
      </div>

      <div className="tittle">
        <div>Welcome My Reads</div>
      </div>

      <div className="header-navegate">
        
        <Link to='/'>
          <div className="button-hover"><IconButton> <Icon icon={ICONS.HOME} color='rgb(0, 151, 167)' /> </IconButton></div>
        </Link>

        <IconMenu
          iconButtonElement={ 
            <div className="button-hover"><IconButton> <Icon icon={ICONS.USER} color='rgb(0, 151, 167)' /> </IconButton></div>
          
          }
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onItemClick={() => window.alert("tes")}
        >
          <MenuItem primaryText="Sair" />
        </IconMenu>

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

const url = {
  git: "https://github.com/matheusicaro/my-reads-udacity",
  facebook: "https://www.facebook.com/matheus.icaro.5",
  linkedin: "https://www.linkedin.com/in/matheusicaro",

}