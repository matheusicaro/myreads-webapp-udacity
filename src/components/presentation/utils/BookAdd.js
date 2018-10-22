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
    moveBook(event.target.innerHTML);
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