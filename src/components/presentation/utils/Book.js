import React from 'react'

import './Book.css'

import BookDetailsContainer from '../../container/utils/BookDetailsContainer'
import BookAdd from './BookAdd';

const Book = ({ book, moveBookCategorie }) => {
    
    const { imageLinks } = book;

    const moveBook = (newCategorieBook) =>{
        moveBookCategorie(book, newCategorieBook)
    }

    return (
        <article className="book" >
            
            <aside className="book-top">
                <img src={imageLinks.smallThumbnail} alt="Avatar" />    <BookAdd moveBook={ moveBook }></BookAdd>
            </aside>
            

            <BookDetailsContainer book={ book } > </BookDetailsContainer>

        </article>
    )
}

export default Book
