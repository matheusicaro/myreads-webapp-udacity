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
import spa from 'material-ui/svg-icons/places/spa';

const Header = () => {

  return (
    <div className='header'>

      <div className="profile">
        <span>Welcome My Reads</span>
      </div>

      <Link to='/'>
        <FlatButton
          labelPosition="before"
          primary={true}
          icon={<Home />}
        />
      </Link>

      <IconMenu
        iconButtonElement={<IconButton><Account color="rgb(0, 151, 167)" /></IconButton>}
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
          icon={<Arrow />}
        />
      </Link>

    </div>
  )
}

export default Header