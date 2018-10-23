import React, { Component } from 'react'

import Home from '../../presentation/screen/home/Home'

import { getAll, update } from '../../../api/BooksAPI'

class HomeContainer extends Component {

    constructor() {
        super();
        this.state = { books: '' }
        getAll().then(result => {
            this.setState({
                books: result
            })
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

        const { books } = this.state;
        return (
            <div>
                {
                    (books === '') ? 'aguardando ...' : <Home books={books} moveBookCategorie={this.moveBookCategorie}>  </Home>
                }
            </div>
        )
    }
}

export default HomeContainer