// rafcp
import React from 'react'
import PropTypes from 'prop-types'

import Book from '../utils/Book'

const BookCase = ({ books, style }) => {

  return (
    <div className={ style }>
     <ol style={ grid }>
        {books.map( book =>(

          <li><Book book={ book } styles={styles}></Book></li> 
        
        ))}
     </ol>
    </div>
  )
}

BookCase.propTypes = {

}

export default BookCase

const grid = {
  'list-style-type': 'none',
  'padding': '0',
  'margin': '0',
  'display': 'grid',
  'grid-template-columns': '25% 25% 25% 25%',
  'grid-gap': '2%',
}

const styles = {
  titleTag: {
    'font-size' : '90%'
  }
}