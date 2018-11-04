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
import Loading from '../../componentes/Loading';

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