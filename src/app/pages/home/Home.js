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

import BookCase from '../../components/BookCase';

const Home = ({ books, moveBookCategorie }) => {

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
      <div className="bookshelf-title">Currently Reading</div>
      <BookCase classes="home-book-case" books={booksCurrentlyReading} moveBookCategorie={moveBookCategorie}></BookCase>

      <div className="bookshelf-title">Want To Read</div>
      <BookCase classes="home-book-case" books={booksWantToRead} moveBookCategorie={moveBookCategorie}></BookCase>

      <div className="bookshelf-title">Read</div>
      <BookCase classes="home-book-case" books={booksRead} moveBookCategorie={moveBookCategorie}></BookCase>
    </section>
  )
}

export default Home

Home.propTypes = {

  moveBookCategorie: PropTypes.func.isRequired,
  books: PropTypes.array,

};
