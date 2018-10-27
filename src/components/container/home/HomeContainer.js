import React, { Component } from 'react'

import Home from '../../presentation/screen/home/Home'

import { getAll, update } from '../../../api/BooksAPI'
import Loading from '../../presentation/utils/Loading';

class HomeContainer extends Component {

    constructor() {
        super();
        this.state = { books: '', loading: true }
        
        getAll().then(result => {
            setTimeout(()=> this.setState({ books: result, loading: false}), 3000)
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

    render() {
        const { books, loading } = this.state;
        return (
            <div>
                { loading && <Loading></Loading> }
                { !loading && <Home books={books} moveBookCategorie={this.moveBookCategorie}>  </Home> }
            </div>
        )
    }
}

export default HomeContainer