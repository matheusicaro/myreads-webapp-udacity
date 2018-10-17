// rafcp
import React from 'react'
import PropTypes from 'prop-types'

import Book from '../utils/Book'

const BookCase = (props) => {
  const style = props.styleChild
  const {books} = props;
  
  return (
    <div className={ style }>
     <ol style={ grid }>
        {books.map( (book, index) =>(

          <li key={index}><Book book={ book } styles={styles}></Book></li> 
        
        ))}
     </ol>
    </div>
  )
}

BookCase.propTypes = {

}

export default BookCase

const grid = {
  'listStyleType': 'none',
  'padding': '0',
  'margin': '0',
  'display': 'grid',
  'gridTemplateColumns': '25% 25% 25% 25%',
  'gridGap': '2%',
}

const styles = {
  titleTag: {
    'fontSize' : '90%'
  }
}