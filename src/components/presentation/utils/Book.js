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
import PropTypes from 'prop-types';

import './Book.css'

import BookDetailsContainer from '../../container/utils/BookDetailsContainer'
import BookAdd from './BookAdd';

const Book = ({ book, moveBookCategorie }) => {

    const { imageLinks } = book;

    const moveBook = (newCategorieBook) => {
        console.log(newCategorieBook)
        moveBookCategorie(book, newCategorieBook)
    }

    return (
        <article className="book" >
            <aside className="cover">
                <img src={imageLinks.smallThumbnail} alt="Avatar" />
            </aside>

            <aside className="book-top">
                <BookDetailsContainer book={book} > </BookDetailsContainer>
                <BookAdd moveBook={moveBook}></BookAdd>
            </aside>
        </article>
    )
}

export default Book

Book.propTypes = {
    moveBookCategorie: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,  
  };