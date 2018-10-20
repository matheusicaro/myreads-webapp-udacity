import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ book }) => {

    const { title, imageLinks } = book;

    return (
    <div className='{divTag}'>
        { (imageLinks) && 
            <img className = '{imgTag}' src={imageLinks.smallThumbnail} alt={`Imagem do livro: ${title}`} width={`${imageLinks.width}`} height={`${imageLinks.height}`} /> }
        
        { (title) &&
            <h3 className='{titleTag}'> {title} </h3> }
        
    </div>
  )
}

Book.propTypes = {

}

export default Book

