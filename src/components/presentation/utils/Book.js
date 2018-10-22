import React from 'react'

import './Book.css'

import BookDetailsContainer from '../../container/utils/BookDetailsContainer'

const Book = ({ book }) => {

    const { title, imageLinks } = book;
    return (
        <div className="book" >
            <article className="book-top">
                <img src={imageLinks.smallThumbnail} alt="Avatar" />
            </article>

            <article className="book-title">{title}</article>

            <BookDetailsContainer book={ book } > </BookDetailsContainer>
        </div>
    )
}

export default Book
