import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HeaderInSearch extends Component {
  
  constructor(){
    super()
    this.state = {
      query:''
    }
  }

  searchQuery = (event) =>{

    this.setState({
      query: event.target.value
    })

  }
  
  searchBooks = (event)=> {
    if(event.key === 'Enter')
      this.props.search(this.state.query)
  }

  render() {
    return (
      <div>
          <input placeholder="busque um livro..." onChange={ this.searchQuery } onKeyPress={ this.searchBooks } />
      </div>
    ) 
  }
}

export default HeaderInSearch

