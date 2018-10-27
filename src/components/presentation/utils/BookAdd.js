import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/content/add-circle';

/**
 * Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and
 * `targetOrigin` properties.
 */
const BookAdd = ({ moveBook }) => {

  const click = (event) =>{
    let categorie = event.target.innerHTML;

    if (categorie === 'Currently Reading') categorie = 'currentlyReading'
    else if (categorie === 'Want to Read')  categorie = 'wantToRead'
    else if (categorie === 'Read')  categorie = 'read'
    else if (categorie === 'None')  categorie = 'none'
    
    moveBook(categorie);
  }

  return (
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        onItemClick={click}
      >
        <MenuItem primaryText="move to Currently Reading" />
        <MenuItem primaryText="move to Want to Read" />
        <MenuItem primaryText="move to Read" />
        <MenuItem primaryText="Remove" />
      </IconMenu>
  );
}

export default BookAdd

