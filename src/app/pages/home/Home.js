/*
* DESCRIPTION
*
* this component is responsible for assembling the home page of the application, 
* where it contains the user section books in the form of a shelf.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/pages/Home.css';

// Import languages
import * as translations from '../../translations'

import BookCase from '../../components/BookCase';

const Home = ({ books, moveBookCategorie, language }) => {

  const { home } = translations[language];

  if (books === '')
    return ''

  const booksCurrentlyReading = [];
  const booksWantToRead = [];
  const booksRead = [];

  books.map(element => {
    if (element.shelf === 'wantToRead') booksWantToRead.push(element);
    else if (element.shelf === 'currentlyReading') booksCurrentlyReading.push(element);
    else if (element.shelf === 'read') booksRead.push(element);
  })

  return (
    <section className="home">
      <div className="bookshelf-title">{ home.titleCurrently }</div>
      <BookCase classes="home-book-case" books={booksCurrentlyReading} moveBookCategorie={moveBookCategorie} language={home.bookDetails}></BookCase>

      <div className="bookshelf-title">{ home.titleWant }</div>
      <BookCase classes="home-book-case" books={booksWantToRead} moveBookCategorie={moveBookCategorie} language={home.bookDetails}></BookCase>

      <div className="bookshelf-title">{ home.titleRead }</div>
      <BookCase classes="home-book-case" books={booksRead} moveBookCategorie={moveBookCategorie} language={home.bookDetails}></BookCase>
    </section>
  )
}

export default Home

Home.propTypes = {

  moveBookCategorie: PropTypes.func.isRequired,
  books: PropTypes.array,

};
