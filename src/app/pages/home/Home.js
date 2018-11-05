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

import BookCase from '../../components/presentation/BookCase';
import FlatButton from 'material-ui/FlatButton';

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

  const scrollMove = (event) =>{
    const topic = event.target.textContent;
    const height = (document.body.scrollHeight) / 3;

    if(topic === 'Quero ler' || topic === 'Want To Read') window.scroll(0, (height) );
    else if(topic === 'Read' || topic === 'Ler') window.scroll(0,(height*3));
    else if(topic === 'Currently Reading' || topic === 'Lendo Atualmente') window.scroll(0,(height/2));

  }

  console.log(home)

  return (
    <section className="home">
      <FlatButton label={ home.titleWant } primary={true} onClick={ scrollMove } style={{color:"black"}} />
      <FlatButton label={ home.titleRead } primary={true} onClick={ scrollMove } style={{color:"black"}} />


      <div className="bookshelf-title">{ home.titleCurrently }</div>
      <BookCase classes="home-book-case" books={booksCurrentlyReading} moveBookCategorie={moveBookCategorie} language={home.book}></BookCase>

      <FlatButton label={ home.titleCurrently } primary={true} onClick={ scrollMove } style={{color:"black"}} />
      <FlatButton label={ home.titleWant } primary={true} onClick={ scrollMove } style={{color:"black"}} />
      <FlatButton label={ home.titleRead } primary={true} onClick={ scrollMove } style={{color:"black"}} />

      <div className="bookshelf-title">{ home.titleWant }</div>
      <BookCase classes="home-book-case" books={booksWantToRead} moveBookCategorie={moveBookCategorie} language={home.book}></BookCase>

      <div className="bookshelf-title">{ home.titleRead }</div>
      <BookCase classes="home-book-case" books={booksRead} moveBookCategorie={moveBookCategorie} language={home.book}></BookCase>
      
      <FlatButton label={ home.titleCurrently } primary={true} onClick={ scrollMove } style={{color:"black"}} />
      <FlatButton label={ home.titleWant } primary={true} onClick={ scrollMove } style={{color:"black"}} />

    </section>
  )
}

export default Home

Home.propTypes = {

  moveBookCategorie: PropTypes.func.isRequired,
  books: PropTypes.array,

};
