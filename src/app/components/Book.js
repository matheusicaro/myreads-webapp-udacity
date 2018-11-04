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

import '../styles/components/Book.css'

import BookDetailsContainer from './BookDetailsContainer'
import BookAdd from './BookAdd';

const Book = ({ book, moveBookCategorie }) => {

    const { imageLinks } = book;

    const moveBook = (newCategorieBook) => {
        moveBookCategorie(book, newCategorieBook)
    }

    return (
        <div className="book" >
            <div className="cover">
                <img src={imageLinks.smallThumbnail} alt="Avatar" />
            </div>

            <div className="book-top">
                <BookDetailsContainer book={book} > </BookDetailsContainer>
                <BookAdd moveBook={moveBook}></BookAdd>
            </div>
        </div>
    )
}

export default Book

Book.propTypes = {
    moveBookCategorie: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,  
};
