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

import './Home.css';

import BookCase from '../../utils/BookCase';

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
      <h2 className="bookshelf-title">Currently Reading</h2>
      <BookCase styles={styles} books={booksCurrentlyReading} moveBookCategorie={moveBookCategorie}></BookCase>

      <h2 className="bookshelf-title">Want To Read</h2>
      <BookCase styles={styles} books={booksWantToRead} moveBookCategorie={moveBookCategorie}></BookCase>

      <h2 className="bookshelf-title">Read</h2>
      <BookCase styles={styles} books={booksRead} moveBookCategorie={moveBookCategorie}></BookCase>
    </section>
  )
}

export default Home

Home.propTypes = {

  moveBookCategorie: PropTypes.func.isRequired,
  books: PropTypes.array,

};

const styles = {

  section: {
    textAlign: 'center',
    overflowX: 'auto',
    marginTop: '4%',
  },

  ol: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',

    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },

  li: {
    padding: '0% 4% 4% 0%',
    textAlign: 'left',
  }
}
