/*
* DESCRIPTION
*
* This component is reusable and responsible for assembling a book's visual structure
* with detail and action buttons on the element that is printed.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import './Book.css'

import { BookDetailsContainer as BookDetails } from './bookDetails'
import { BookAdd } from './'

export const Book = ({ book, moveBookCategorie, language, page }) => {
  const { imageLinks } = book

  const moveBook = (newCategorieBook) => {
    moveBookCategorie(book, newCategorieBook)
  }

  return (
    <div className='book' >
      <div className='cover'>
        <img src={imageLinks.smallThumbnail} alt='Avatar' />
      </div>

      <div className='book-top'>
        <BookDetails book={book} language={language.bookDetails} />
        <BookAdd class='teste' moveBook={moveBook} language={language.bookAdd} page={page} />
      </div>
    </div>
  )
}

Book.propTypes = {
  moveBookCategorie: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
}
