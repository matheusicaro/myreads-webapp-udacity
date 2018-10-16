import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/home.css';

import HeaderProfile from './home/HeaderProfile';
import HeaderSearch from './home/HeaderSearch';
import CurrentlyReading from './home/CurrentlyReading';
import WantRead from './home/WantRead';
import Read from './home/Read';

const Home = (props) =>{
  
  if(props.books === '')
    return ''

  let {booksCurrentlyReading, booksWantRead, booksRead } = [];

  console.log(booksCurrentlyReading, booksWantRead, booksRead)
  props.books.map(book => {
    
  })
  
  console.log('props..:', props) 
  return (
      <div className="container">
        <HeaderProfile> </HeaderProfile>
        <HeaderSearch> </HeaderSearch>
        <CurrentlyReading> </CurrentlyReading>
        <WantRead> </WantRead>
        <Read> </Read>
      </div>
    )
}

export default Home