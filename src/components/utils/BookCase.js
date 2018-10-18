// rafcp
import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const BookCase = (props) => {
  const style = props.styleChild
  const {books} = props;
  
  return (
    <div className={ style }>
      
      { books && 
        <ol style={ grid }>
            {books.map( (book, index) =>(

              <li key={index}><Book book={ book } styles={styles}></Book></li> 
            
            ))}
        </ol>
      }
      
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
  'gridTemplateColumns': 'auto auto auto auto',
  'gridGap': '2%',
  'border':'solid',
  'border-color':'black'
}

const styles = {
  titleTag: {
    'fontSize' : '90%'
  }
}