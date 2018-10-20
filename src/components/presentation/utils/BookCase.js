// rafcp
import React from 'react'

import './BookCase.css'

import Book from './Book'

const BookCase = (props) => {
  const style = props.styleChild
  const {books} = props;

  return (
    <div className={ style }>
    
        <ol className='grid'>
            {books.map( (book, index) =>(

              <li key={index}><Book book={ book } ></Book></li> 
            
            ))}
        </ol>
    </div>
  )
}

export default BookCase

