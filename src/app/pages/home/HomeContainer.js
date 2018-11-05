/*
* DESCRIPTION
*
* Component responsible for the logic of the data passed
* in the visualization component 'Home'. Only responsible
* for controlling all the books received by the api in 
* your state.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React, { Component } from 'react'

import Home from './Home'

import { getAll, update } from '../../api/BooksAPI'
import Loading from '../../components/presentation/Loading';

class HomeContainer extends Component {

    constructor() {
        super();
        this.state = { 
            books: '', 
            loading: true,
            updateBooks: {
                book: '',
                newCategorieBook: '',
                isUpdate: false,
              },
        }
        
        getAll().then(result => {
            setTimeout(()=> this.setState({ books: result, loading: false}), 1000)
        })
    }

    moveBookCategorie = (book, newCategorieBook) => {

        update(book, newCategorieBook).then(() => {
            getAll().then(result => {
                this.setState({
                    books: result
                })
            })
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


    render() {
        const { books, loading } = this.state;
        const { language } = this.props;

        return (
            <div>
                { loading && <Loading></Loading> }
                { !loading && <Home books={books} moveBookCategorie={this.moveBookCategorie} language={language}>  </Home> }
            </div>
        )
    }
}

export default HomeContainer