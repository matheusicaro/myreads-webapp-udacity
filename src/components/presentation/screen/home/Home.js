import React from 'react'

import './Home.css';

import BookCase from '../../utils/BookCase';


const Home = ({ books, moveBookCategorie }) =>{
  
  // TODO: Implementar loading na pagina
  // até chamar a API demora um pouco, logo renderiza '' para não haver erros.

  if(books === '')
    return ''
  
  const booksCurrentlyReading = [];
  const booksWantToRead = [];
  const booksRead = [];
  
  books.map(element => {
    if(element.shelf === 'wantToRead') booksWantToRead.push(element);
    else if(element.shelf === 'currentlyReading') booksCurrentlyReading.push(element);
    else if(element.shelf === 'read') booksRead.push(element);
  })

  return (     
          <section className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>         
            <BookCase books={ booksCurrentlyReading } moveBookCategorie={ moveBookCategorie }></BookCase>
            
            <h2 className="bookshelf-title">booksWantToRead</h2>
            <BookCase books={ booksWantToRead } moveBookCategorie={ moveBookCategorie }></BookCase>
            
            <h2 className="bookshelf-title">read</h2>
            <BookCase books={ booksRead } moveBookCategorie={ moveBookCategorie }></BookCase>
          </section>
    )
}

export default Home

