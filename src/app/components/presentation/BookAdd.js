/*
* DESCRIPTION
*
* This component is reusable and responsible to receive the user's options through a menu, 
* in which it must review the selected category. Component visually as a button.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';


import AddCicle from 'material-ui/svg-icons/content/add-circle';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

import PropTypes from 'prop-types';


/**
 * Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and
 * `targetOrigin` properties.
 */
const BookAdd = ({ moveBook, language, page }) => {

  const click = (event) => {

    let categorie = event.target.innerHTML;

    if (categorie === 'move to Currently Reading') categorie = 'currentlyReading'
    else if (categorie === 'move to Want to Read') categorie = 'wantToRead'
    else if (categorie === 'move to Read') categorie = 'read'
    else if (categorie === 'Remove') categorie = 'remove'

    moveBook(categorie);
  }

  return (
    <IconMenu
      iconButtonElement={<IconButton iconStyle={styles.iconButton}> { (page==='search') ? <AddCicle /> : <ArrowDown /> } </IconButton>}
      anchorOrigin={styles.iconMenu}
      targetOrigin={styles.iconMenu}
      onItemClick={click}
      menuStyle={{style:{background:'red'}}}
    >
      <MenuItem primaryText={ language.currently }/>
      <MenuItem primaryText={ language.want } />
      <MenuItem primaryText={ language.read } />
      <MenuItem primaryText={ language.remove } />
    </IconMenu>
  );
}

export default BookAdd

BookAdd.propTypes = {
  moveBook: PropTypes.func,
};

const styles = {

  iconButton: {
    color: 'rgb(0, 151, 167)',
  },

  iconMenu: {
    horizontal: 'left',
    vertical: 'top'
  }
}