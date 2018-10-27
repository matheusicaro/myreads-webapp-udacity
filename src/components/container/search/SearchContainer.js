import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { search, update } from '../../../api/BooksAPI'
import { verifyReturnUpdate } from '../utils/VerifyReturnBooksAPI'

import Search from '../../presentation/screen/search/Search';

class SearchContainer extends Component {

  constructor() {
    super()
    this.state = {
      query: '',
      books: '',
      loading: false,
      isDisabledInput: false,
      isOpenSearchTip: false,
      updateBooks: {
        book: '',
        newCategorieBook: '',
        isUpdate: false,
      },
    }
  }

  search = () => {
    const { query } = this.state;

    this.setState({ loading: true,  isDisabledInput:true });
    
    search(query).then(result => {

      if (!result.length > 0) result = false;
      setTimeout(() => this.setState({ books: result, loading: false, isDisabledInput: false }), 3000)
    })
  }

  searchBooks = (event) => {
    if (event.key === 'Enter') {
      this.search()
    }
  }

  searchQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  moveBookCategorie = (book, newCategorieBook) => {

    const { books } = this.state;

    const index = books.indexOf(book);
    books.splice(index, 1);
    const newBooks = books;

    this.setState(currentState => ({
      books: newBooks,
      updateBooks: {
        book,
        newCategorieBook,
        isUpdate: !currentState.updateBooks.isUpdate
      }
    }))
  }

  isOpenSearchTip = (isOpen) =>{
    this.setState({isOpenSearchTip: isOpen})
  }

  componentDidUpdate() {

    const { isUpdate } = this.state.updateBooks;

    if (isUpdate) {

      const { book, newCategorieBook } = this.state.updateBooks;

      update(book, newCategorieBook).then((result) => {

        // TRATAMENTO PARA UPDATE === FAIL, POIS API SEMPRE RETORNA 200. ANALISE ATRAVÉS DO RESULT
        if (result) {
          let updateState = verifyReturnUpdate(result, book);
          if (updateState) {
            this.setState(currentState => ({
              books: [book, ...currentState.books]
            }))
          }
        } else {
          window.alert('Error ao mudar o book de categoria');
          this.setState(currentState => ({
            books: [book, ...currentState.book]
          }))
        }

      })

      // NÃO USEI SETSTATE PARA NAO CHAMAR OS METODOS DO CICLO DE VIDA DO REACT POIS ESTA VARIAVEL NÃO NECESSITA 
      this.state.updateBooks.isUpdate = false;
    }
  }

  render() {
    const books = (this.state.books) ? (this.state.books) : (false);
    const { isDisabledInput, loading, isOpenSearchTip } = this.state;

    return (
       <Search
          books={books}
          isDisabled={isDisabledInput}
          isLoading={loading}

          moveBookCategorie={this.moveBookCategorie}
          searchQuery={this.searchQuery}
          onKeyPress={this.searchBooks}

          isOpenSearchTip={isOpenSearchTip}
          actionSearchTip={this.isOpenSearchTip}
        >
      </Search>
    )
  }
}

export default SearchContainer
