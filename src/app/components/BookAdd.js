/*
* DESCRIPTION
*
* This component is reusable and responsible to receive the user's options through a menu,
* in which it must review the selected category. Component visually as a button.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'

import AddCicle from 'material-ui/svg-icons/content/add-circle'
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down'

import PropTypes from 'prop-types'
import { MyContext } from '../Context'

import './styles.css'

/**
 * Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and
 * `targetOrigin` properties.
 */
export const BookAdd = ({ moveBook, language, page }) => {
  const click = (event) => {
    console.dir(event.target.innerHTML)
    let categorie = event.target.innerHTML

    if (categorie === 'move to Currently Reading' ||
        categorie === 'mover para Lendo Atualmente' ||
        categorie === 'mover a Leyendo Actualmente') categorie = 'currentlyReading'
    else if (categorie === 'move to Want to Read' ||
          categorie === 'mover para Quero Ler' ||
          categorie === 'mover a Quiero Leer') categorie = 'wantToRead'
    else if (categorie === 'move to Read' ||
          categorie === 'mover para Ler' ||
          categorie === 'mover a Leer') categorie = 'read'
    else if (categorie === 'Remove' ||
          categorie === 'Remover' ||
          categorie === 'Quitar') categorie = 'remove'

    moveBook(categorie)
  }

  return (
    <MyContext.Consumer>
      {({ state }) => (
        <div className={theme[state.theme]}>
          <IconMenu
            iconButtonElement={<IconButton > { (page === 'search') ? <AddCicle /> : <ArrowDown /> } </IconButton>}
            anchorOrigin={styles.iconMenu}
            targetOrigin={styles.iconMenu}
            onItemClick={click}
            menuStyle={{ style: { background: 'red' } }}
          >
            <MenuItem primaryText={language.currently} />
            <MenuItem primaryText={language.want} />
            <MenuItem primaryText={language.read} />
            <MenuItem primaryText={language.remove} />
          </IconMenu>
        </div>
      )}
    </MyContext.Consumer>
  )
}

const theme = {
  Dark: 'Dark',
  Light: 'Light'
}
const styles = {
  iconMenu: {
    horizontal: 'left',
    vertical: 'top'
  }
}

BookAdd.propTypes = {
  moveBook: PropTypes.func
}
