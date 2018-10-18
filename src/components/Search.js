import React from 'react'
import PropTypes from 'prop-types'

import '../styles/home.css';

import HeaderInSearch from './search/HeaderInSearch'
import BookCase from './utils/BookCase';

const Search = (props) => {
  
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

    const search = (query) =>{
      props.search(query)
    }

    return (
      <section>
        <header id="header">
          <HeaderInSearch search={ search }> </HeaderInSearch>
        </header>
        <section id="casesbook">         
          <BookCase books={ books } styleChild={ 'grid-column : 1/5' }></BookCase>
        </section>
      </section>
    )
}

export default Search
