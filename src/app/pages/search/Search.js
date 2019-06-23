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

import './Search.css'

// Import Components
import { BookCase, Loading, DrawerMenu as SearchMenu } from '../../components'
import Arrow from 'material-ui/svg-icons/action/help'
import searchGif from '../../media/gifs/search-help.gif'

const Search = ({ books, query, onKeyPress, moveBookCategorie, isLoading, isDisabledInput, actionSearchTip, isOpenSearchTip, contentsMenuDrawer, language }) => {
  return (
    <section className='search'>

      <div className='search-help'>
        <input placeholder={language.inputPlaceHolder} onChange={query} onKeyPress={onKeyPress} disabled={isDisabledInput} />
        <SearchMenu
          actionOpen={actionSearchTip}
          isOpen={isOpenSearchTip}
          topicsMenuDrawer={contentsMenuDrawer}
          language={language.drawerMenu}
          icon={<Arrow />}
          openRigth
        />
      </div>

      {isLoading && <Loading />}

      {!isLoading &&
        <section id='casesbook'>
          {books &&
          <BookCase
            classes='search-book-case'
            books={books}
            moveBookCategorie={moveBookCategorie}
            language={language.book}
            page='search'
            styles={styles}
          />
          }
          {!books &&
          <div className='img-gif'>
            <img src={searchGif} alt='How to Search' />
          </div>
          }
        </section>
      }
    </section>
  )
}

const styles = {
  bookStyle: { padding: '0% 4% 4% 0%', textAlign: 'left' }
}

SearchMenu.propTypes = {

  query: PropTypes.func,
  onKeyPress: PropTypes.func,
  moveBookCategorie: PropTypes.func,
  isLoading: PropTypes.bool,
  isDisabledInput: PropTypes.func,
  actionSearchTip: PropTypes.func,
  books: PropTypes.array,
  contentsMenuDrawer: PropTypes.array
}

export default Search
