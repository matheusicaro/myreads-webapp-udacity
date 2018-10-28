import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Search.css';

import BookCase from '../../utils/BookCase';
import Loading from '../../utils/Loading';
import SearchTip from './SearchTip';

const Search = ({ books, searchQuery, onKeyPress, moveBookCategorie, isLoading, isDisabled, actionSearchTip, isOpenSearchTip }) => {
    return (
        <section className="bookshelf">

            <div className="fild-search-help">
                <input className="search-books" placeholder="busque um livro..." onChange={searchQuery} onKeyPress={onKeyPress} disabled={isDisabled} />
                <SearchTip actionSearchTip={ actionSearchTip } isOpen={ isOpenSearchTip }></SearchTip>
            </div>

            {isLoading && <Loading></Loading>}

            {!isLoading &&
                <section id="casesbook">
                    {books &&
                        <BookCase
                            styles={styles}
                            books={books}
                            moveBookCategorie={ moveBookCategorie }
                            styleChild={'grid-column : 1/5'}
                        ></BookCase>
                    }
                    {!books &&
                        <div style={{color:'red'}}>
                            GIFF QUE DEMONSTRA LIVROSS
                        </div>
                    }
                </section>
            }
        </section>
    )
}

export default Search

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
        flexFlow: 'wrap',
    },

    li: {
        padding: '0% 4% 4% 0%',
        textAlign: 'left',
    }
}