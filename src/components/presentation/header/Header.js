import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Arrow from 'material-ui/svg-icons/navigation/arrow-forward';
import Home from 'material-ui/svg-icons/action/home';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Account from 'material-ui/svg-icons/action/account-circle';

import './Header.css';
import { HardwareDesktopWindows } from 'material-ui/svg-icons';

const Header = () => {

  return (
    <div className='header'>

      <Link to='/'>
        <FlatButton
          labelPosition="before"
          primary={true}
          icon={<Home />}
        />
      </Link>

      <div className="profile">
        <IconMenu
          iconButtonElement={<IconButton><Account color="rgb(0, 151, 167)" /></IconButton>}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onItemClick={()=> window.alert("tes")}
          >
          <MenuItem primaryText="Sair" />
        </IconMenu>
      </div>

      <Link to='/search-books' >
        <FlatButton
          label="Adicionar Livros"
          labelPosition="before"
          primary={true}
          icon={<Arrow />}
        />
      </Link>

    </div>
  )
}

export default Header