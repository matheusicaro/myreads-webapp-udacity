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

import BookCase from '../../components/presentation/BookCase';
import FlatButton from 'material-ui/FlatButton';

const Home = ({ books, moveBookCategorie, language, styleHide }) => {

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

  const scrollMove = (event) => {
    const topic = event.target.textContent;
    const height = (document.body.scrollHeight) / 3;

    if (topic === 'Quero ler' || topic === 'Want To Read') window.scroll(0, (height));
    else if (topic === 'Read' || topic === 'Ler') window.scroll(0, (height * 3.5));
    else if (topic === 'Currently Reading' || topic === 'Lendo Atualmente') window.scroll(0, (height / 2.5));

  }

  return (
    <section className="home" style={(styleHide) ? styleHide : {}}>

      <div className="topics">
        <FlatButton label={`> ${language.titleCurrently}`} primary={true} onClick={scrollMove} style={{ color: "black" }} />
        <FlatButton label={language.titleWant} primary={true} onClick={scrollMove} style={{ color: "black" }} />
        <FlatButton label={language.titleRead} primary={true} onClick={scrollMove} style={{ color: "black" }} />
      </div>

      <div className="bookshelf-title">{language.titleCurrently}</div>
      <BookCase classes="home-book-case" books={booksCurrentlyReading} moveBookCategorie={moveBookCategorie} language={language.book} styles={styles.bookCase}></BookCase>

      <div className="topics">
        <FlatButton label={language.titleCurrently} primary={true} onClick={scrollMove} style={{ color: "black" }} />
        <FlatButton label={`> ${language.titleWant}`} primary={true} onClick={scrollMove} style={{ color: "black" }} />
        <FlatButton label={language.titleRead} primary={true} onClick={scrollMove} style={{ color: "black" }} />
      </div>

      <div className="bookshelf-title">{language.titleWant}</div>
      <BookCase classes="home-book-case" books={booksWantToRead} moveBookCategorie={moveBookCategorie} language={language.book} styles={styles.bookCase}></BookCase>

      <div className="bookshelf-title">{language.titleRead}</div>
      <BookCase classes="home-book-case" books={booksRead} moveBookCategorie={moveBookCategorie} language={language.book} styles={styles.bookCaseLast}></BookCase>

      <div className="topics">
        <FlatButton label={language.titleCurrently} primary={true} onClick={scrollMove} style={{ color: "black", margin: "5% 5% 0% 0% !important" }} />
        <FlatButton label={language.titleWant} primary={true} onClick={scrollMove} style={{ color: "black" }} />
        <FlatButton label={`> ${language.titleRead}`} primary={true} onClick={scrollMove} style={{ color: "black" }} />
      </div>

    </section>
  )
}

export default Home

Home.propTypes = {

  moveBookCategorie: PropTypes.func.isRequired,
  books: PropTypes.array,

};

const styles = {
  bookCase: {
    section: {
      textAlign: 'center',
      overflowX: 'auto',
      marginTop: '4%',
      margin: '5% 5% 15% 5%',
      position: 'relative',
    }
  },
  bookCaseLast: {
    section: {
      textAlign: 'center',
      overflowX: 'auto',
      marginTop: '4%',
      margin: '5% 5% 0% 5%',
      position: 'relative',
    }
  }
}
