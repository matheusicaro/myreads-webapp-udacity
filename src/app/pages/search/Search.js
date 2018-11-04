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

import BookCase from '../../componentes/BookCase';
import Loading from '../../componentes/Loading';
import DrawerMenu from '../../componentes/DrawerMenu';
import searchGif from '../../media/gifs/search-help.gif'

const Search = ({ books, query, onKeyPress, moveBookCategorie, isLoading, isDisabledInput, actionSearchTip, isOpenSearchTip, contentsMenuDrawer }) => {

    return (
        <section className="search">

            <div className="search-help">
                <input placeholder="busque um livro..." onChange={query} onKeyPress={onKeyPress} disabled={isDisabledInput} />
                <DrawerMenu 
                    actionSearchTip={actionSearchTip} 
                    isOpen={isOpenSearchTip}
                    menuDrawer={contentsMenuDrawer}
                ></DrawerMenu>
            </div>

            {isLoading && <Loading></Loading>}

            {!isLoading &&
                <section id="casesbook">
                    {books &&
                        <BookCase
                            styles={styles}
                            books={books}
                            moveBookCategorie={moveBookCategorie}
                            styleChild={'grid-column : 1/5'}
                        ></BookCase>
                    }
                    {!books &&
                        <div className="img-gif">
                            <img src={searchGif} alt="How to Search" />
                        </div>
                    }
                </section>
            }
        </section>
    )
}

export default Search

DrawerMenu.propTypes = {

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