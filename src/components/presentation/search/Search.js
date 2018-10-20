import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../../../styles/home.css';

import BookCase from '../utils/BookCase';

const Search = ({ books, searchQuery, onKeyPress }) => {

    return (
      <section>
        <header id="header">
            <Link to='/' className=''> back to home </Link>
            <input placeholder="busque um livro..." onChange={ searchQuery } onKeyPress={ onKeyPress } />
        </header>
        <section id="casesbook">   
            { books &&      
                <BookCase books={ books } styleChild={ 'grid-column : 1/5' }></BookCase>
            }
            { !books && 'nenhum livro encontrado'}
        </section>
      </section>
    )
}

export default Search
