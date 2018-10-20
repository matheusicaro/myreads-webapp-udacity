import React, { Component } from 'react'

import Home from '../../presentation/home/Home'

import { getAll } from '../../../api/BooksAPI'

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


    render() {

        const { books } = this.state;

        return (
            <div>
                {
                    (books === '') ? 'aguardando ...' : <Home books={books} >  </Home>
                }
            </div>
        )
    }
}

export default HomeContainer