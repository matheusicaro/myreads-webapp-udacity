/*
* DESCRIPTION
*
* Component responsible for the logic of the data passed
* in the visualization component 'Search'. The data is updated 
* before the call in the api for a performasse in the front end,
* soon after the update, in the last life cycle of the 
* React update, the call is made in the api, and in case of an
* error is informed to the user if no, the user did not notice
* a communication delay.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React, { Component } from 'react'

import { search, update } from '../../api/BooksAPI'
import { verifyReturnUpdate } from './VerifyReturnBooksAPI'

import Search from './Search';

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

    this.setState({ loading: true, isDisabledInput: true });

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

  isOpenSearchTip = (isOpen) => {
    this.setState({ isOpenSearchTip: isOpen })
  }

  componentDidUpdate() {

    const { isUpdate } = this.state.updateBooks;

    // PERFORMS THE UPDATE IN THE BOOK'S API WITH A NEW CATEGORY.
    if (isUpdate) {

      const { book, newCategorieBook } = this.state.updateBooks;

      update(book, newCategorieBook).then((result) => {

        // UPDATE TREATMENT === FAIL, BECAUSE API ALWAYS RETURNS 200. ANALYZE THROUGH RESULT
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

      // DO NOT USE SETSTATE NOT TO CALL THE METHODS OF THE REACT LIFE 
      // CYCLE AS THIS REPRODUCTIVE VARIABLE DOES NOT NEED 
      this.state.updateBooks.isUpdate = false;
    }
  }

  render() {
    const books = (this.state.books) ? (this.state.books) : (false);
    const { isDisabledInput, loading, isOpenSearchTip } = this.state;

    return (
      <Search
        books={books}
        isDisabledInput={isDisabledInput}
        isLoading={loading}

        moveBookCategorie={this.moveBookCategorie}
        query={this.searchQuery}
        onKeyPress={this.searchBooks}


        isOpenSearchTip={isOpenSearchTip}
        contentsMenuDrawer={menuDrawer}
        actionSearchTip={this.isOpenSearchTip}
      >
      </Search>
    )
  }
}

export default SearchContainer

const menuDrawer = {

  button: 'O que pesquisar',
  tittle: 'Dicas para Pesquisar',
  text: 'Busque por livros com base nas categorias abaixo, ou ainda, pode puscar apenas por suas iniciais como "An", "Ba", por exemplo.',
  topics: [
    ['Android, Art, Artificial Intelligence, Astronomy, Austen'],
    ['Baseball, Basketball, Bhagat, Biography, Brief, Business'],
    ['Camus, Cervantes, Christie, Classics, Comics, Cook, Cricket, Cycling'],
    ['Desai, Design, Development, Digital Marketing, Drama, Drawing, Dumas'],
    ['Education, Everything, Fantasy, Film, Finance, First, Fitness, Football, Future'],
    ['Games, Gandhi, Homer, Horror, Hugo, Ibsen, iOS, Journey, Kafka, King'],
    ['Lahiri, Larsson, Learn, Literary Fiction, Make, Manage, Marquez, Money, Mystery'],
    ['Negotiate, Painting, Philosophy, Photography, Poetry, Production, Programming'],
    ['React, Redux, River, Robotics, Rowling, Satire, Science Fiction, Shakespeare, Singh, Swimming'],
    ['Tale, Thrun, Time, Tolstoy, Travel, Ultimate, Virtual Reality, Web Development'],
  ],
}