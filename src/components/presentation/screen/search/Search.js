import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Search.css';

import BookCase from '../../utils/BookCase';

const Search = ({ books, searchQuery, onKeyPress }) => {

    return (
        <section className="bookshelf">

            <input placeholder="busque um livro..." onChange={searchQuery} onKeyPress={onKeyPress} />

            <section id="casesbook">
                {books &&
                    <BookCase books={books} styleChild={'grid-column : 1/5'}></BookCase>
                }
                {!books && 'nenhum livro encontrado'}
            </section>
            
        </section>
    )
}

export default Search
