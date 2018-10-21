import React from 'react'

import './Book.css'

const Book = ({ book }) => {

    const { title, imageLinks } = book;

    return (
        <div className="book" >
            <article className="book-top">
                <img src={imageLinks.smallThumbnail} alt="Avatar" />
            </article>

            <article className="book-title">{title}</article>
            <article className="book-authors">SubTitle</article>
        </div>
    )
}

export default Book
