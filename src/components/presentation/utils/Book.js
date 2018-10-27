import React from 'react'

import './Book.css'

import BookDetailsContainer from '../../container/utils/BookDetailsContainer'
import BookAdd from './BookAdd';

const Book = ({ book, moveBookCategorie }) => {

    const { imageLinks } = book;

    const moveBook = (newCategorieBook) => {
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
