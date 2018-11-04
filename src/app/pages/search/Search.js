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

import '../../styles/pages/Search.css';

import BookCase from '../../components/BookCase';
import Loading from '../../components/Loading';
import DrawerMenu from '../../components/DrawerMenu';
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
                            classes='search-book-case'
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
