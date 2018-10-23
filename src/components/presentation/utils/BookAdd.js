import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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
    <div>
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        style={style}
        onItemClick={click}
      >
        <h6>Mover para ...</h6>
        <MenuItem primaryText="Currently Reading" />
        <MenuItem primaryText="Want to Read" />
        <MenuItem primaryText="Read" />
        <MenuItem primaryText="None" />
      </IconMenu>

    </div>
  );
}

export default BookAdd

const style = {
  'right': '8px',
  'bottom': '15px',
}