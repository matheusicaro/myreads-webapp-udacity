import React from 'react'

import './BookCase.css'

import Book from './Book'

const BookCase = (props) => {

  const { books } = props;

  return (
    <section className="bookshelf-books">
        <ol className="books-grid">

          {books.map((book, index) => (

           <li key={index}><Book book={book} ></Book></li>

          ))}
        
        </ol>
    </section>
  )
}

export default BookCase
