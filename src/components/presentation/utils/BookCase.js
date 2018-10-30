/*
* DESCRIPTION
*
* This component is reusable and responsible to assemble the layout and desing of a book, 
* in which you receive a component containing a book with information and 
* buttons that perform actions.
*
* The idea of this component is to demonstrate the shelf-shaped books, so it contains all
* the styles that behave the books received.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react'
import PropTypes from 'prop-types';

import Book from './Book'

const BookCase = ({ books, moveBookCategorie, styles }) => {
    
  return (
    // TODO: Styles Nunca pode ser 'undenfined', aplicar PROPS-REQUIRED
    <section style={styles.section} >
        <ol style={styles.ol} >

          {books.map((book, index) => (

            <li style={styles.li} key={index}>
              <Book book={ book } moveBookCategorie={ moveBookCategorie }> </Book>
            </li>

          ))}
        
        </ol>
    </section>
  )
}

export default BookCase
BookCase.propTypes = {

  books: PropTypes.array.isRequired,
  moveBookCategorie: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,

};