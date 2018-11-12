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

import { search } from '../../api/BooksAPI'
import UpdateMoveAPI from '../../api/utils/UpdateMoveAPI';

import Search from './Search';

class SearchContainer extends Component {
 
  constructor() {
    super()    
    this.update = new UpdateMoveAPI();
    this.state = {
      query: '',
      books: '',
      oldBooks:'',
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
      setTimeout(() => this.setState({ books: result, loading: false, isDisabledInput: false }), 1000)
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
      oldBooks: books,
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

  verifyReturnUpdate = (status) =>{

    // ERROR IN RETURN API
    if(status !== 200) {
      this.setState( currentState => ({ books: currentState.oldBooks }));
      // TODO POP-UP
    }

    // DO NOT USE SETSTATE NOT TO CALL THE METHODS OF THE REACT LIFE 
    // CYCLE AS THIS REPRODUCTIVE VARIABLE DOES NOT NEED 
    this.state.updateBooks.isUpdate = false;
  }

  componentDidUpdate() {

    const { isUpdate } = this.state.updateBooks;

    if (isUpdate) {
      const { book, newCategorieBook } = this.state.updateBooks;
      this.verifyReturnUpdate( this.update.move(book, newCategorieBook) );
    }

  }

  render() {
    const { language } = this.props;
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
        contentsMenuDrawer={topicsMenuDrawer}
        actionSearchTip={this.isOpenSearchTip}

        language={language}
      >
      </Search>
    )
  }
}

export default SearchContainer

const topicsMenuDrawer = [
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
]
