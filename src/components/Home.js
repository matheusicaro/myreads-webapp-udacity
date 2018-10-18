import React from 'react'

import PropTypes from 'prop-types'
import '../styles/home.css';

import HeaderProfile from './home/HeaderProfile';
import HeaderSearch from './home/HeaderSearch';
import BookCase from './utils/BookCase';


const Home = (props) =>{
  
  // TODO: Implementar loading na pagina
  // até chamar a API demora um pouco, logo renderiza '' para não haver erros.

  if(props.books === '')
    return ''

  // MOCK
  const books = [
      {
          authors: ["William E. Shotts, Jr."],
          categories: ["COMPUTERS"],
          imageLinks:{
              smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          subtitle: "A Complete Introduction",
          title: "The Linux Command Line",
          publishedDate: "2012",
          pageCount: 480,
          language: "en",
          shelf: "wantToRead"
      },
      {
          authors: ["Harmeet Singh", "Mehul Bhatt"],
          imageLinks:{
              smallThumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          title: "Learning Web Development with React and Bootstrap",
          publishedDate: "2016-12-30",
          pageCount: 278,
          language: "en",
          shelf: "currentlyReading"    
      },
      {
          authors: ["Nils Hartmann", "Oliver Zeigermann"],
          categories: ["Computers"],
          imageLinks:{
              smallThumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          subtitle: "Die praktische Einführung in React, React Router und Redux",
          title: "React",
          publishedDate: "2016-07-07",
          pageCount: 342,
          language: "de",
          shelf: "read"
      },        {
        authors: ["William E. Shotts, Jr."],
        categories: ["COMPUTERS"],
        imageLinks:{
            smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        subtitle: "A Complete Introduction",
        title: "The Linux Command Line",
        publishedDate: "2012",
        pageCount: 480,
        language: "en",
        shelf: "wantToRead"
    },
    {
        authors: ["Harmeet Singh", "Mehul Bhatt"],
        imageLinks:{
            smallThumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        title: "Learning Web Development with React and Bootstrap",
        publishedDate: "2016-12-30",
        pageCount: 278,
        language: "en",
        shelf: "currentlyReading"    
    },
    {
        authors: ["Nils Hartmann", "Oliver Zeigermann"],
        categories: ["Computers"],
        imageLinks:{
            smallThumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail: "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        subtitle: "Die praktische Einführung in React, React Router und Redux",
        title: "React",
        publishedDate: "2016-07-07",
        pageCount: 342,
        language: "de",
        shelf: "read"
    },
  ];
  // END
  
  const booksCurrentlyReading = [];
  const booksWantToRead = [];
  const booksRead = [];
  
  books.map(element => {
    if(element.shelf === 'wantToRead') booksWantToRead.push(element);
    else if(element.shelf === 'currentlyReading') booksCurrentlyReading.push(element);
    else if(element.shelf === 'read') booksRead.push(element);
  })

  const addBooksSearch = () =>{
    props.onNavigateSearch()
  }

  return (
        <section>
          <header id="header">
            <HeaderProfile styleChild={styleHeaderProfile}> </HeaderProfile>
            <HeaderSearch styleChild={styleHeaderSearch} addBooks={ addBooksSearch } > </HeaderSearch>
          </header>
          <section id="casesbook">         
            <BookCase books={ booksCurrentlyReading } styleChild={ styleCurretlyReading } ></BookCase>
            <BookCase books={ booksWantToRead } styleChild={ styleWantToRead }></BookCase>
            <BookCase books={ booksRead } styleChild={ styleRead }></BookCase>
          </section>
        </section>
    )
}

export default Home

const styleHeaderProfile = 'header-profile';
const styleHeaderSearch = 'header-search';
const styleCurretlyReading = 'currently-reading';
const styleWantToRead = 'want-read';
const styleRead = 'read';

