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
            console.log(result)
        })
    }

    moveBookCategorie = (book, newCategorieBook) =>{
        update( book, newCategorieBook).then( (res)=>{
            console.log(res)
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
                    (books === '') ? 'aguardando ...' : <Home books={books} moveBookCategorie={ this.moveBookCategorie }>  </Home>
                }
            </div>
        )
    }
}

export default HomeContainer