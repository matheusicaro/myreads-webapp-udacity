import React from 'react'

import './BookCase.css'

import Book from './Book'

const BookCase = ({ books, moveBookCategorie }) => {

  return (
    <section className="bookshelf-books">
        <ol className="books-grid">

          {books.map((book, index) => (

           <li key={index}><Book book={ book } moveBookCategorie={ moveBookCategorie } ></Book></li>

          ))}
        
        </ol>
    </section>
  )
}

export default BookCase
