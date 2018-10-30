/*
* DESCRIPTION
*
* This component is responsible to demonstrate a search page, 
* which contains a field to search for books (API query), and demonstrations 
* visually constructed by another component 'CaseBook', which is a shelf of 
* books for exhibition.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import './Search.css';

import BookCase from '../../utils/BookCase';
import Loading from '../../utils/Loading';
import SearchTip from './SearchTip';

const Search = ({ books, query, onKeyPress, moveBookCategorie, isLoading, isDisabledInput, actionSearchTip, isOpenSearchTip }) => {
    
    return (
        <section className="search">

            <div className="fild-search-help">
                <input className="search-books" placeholder="busque um livro..." onChange={query} onKeyPress={onKeyPress} disabled={isDisabledInput} />
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

SearchTip.propTypes = {

    query: PropTypes.func,
    onKeyPress: PropTypes.func,
    moveBookCategorie: PropTypes.func,
    isLoading: PropTypes.bool,
    isDisabledInput: PropTypes.func,
    actionSearchTip: PropTypes.func.isRequired,
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
        flexFlow: 'wrap',
    },

    li: {
        padding: '0% 4% 4% 0%',
        textAlign: 'left',
    }
}