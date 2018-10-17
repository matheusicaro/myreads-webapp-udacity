import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ book, styles }) => {

    const { title, imageLinks } = book;
    const { divTag, titleTag, imgTag } = styles;

    return (
    <div style={divTag}>
        { (imageLinks) && 
            <img style = {imgTag} src={imageLinks.smallThumbnail} alt={`Imagem do livro: ${title}`} width={`${imageLinks.width}`} height={`${imageLinks.height}`} /> }
        
        { (title) &&
            <h3 style={titleTag}> {title} </h3> }
        
    </div>
  )
}

Book.propTypes = {

}

export default Book

