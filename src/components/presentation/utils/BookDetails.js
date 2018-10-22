import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import BookAdd from './BookAdd'

import './BookDetails.css'

 const BookDetails = ({ handleOpen, onRequestClose, open, title, subtitle, imageLinks, authors,
                        infoLink, categories, description, language, publishedDate  }) => {
    
    const actions = [
      <FlatButton
        label="Close"
        primary={ true }
        onClick={ onRequestClose }
      />,
    ];

    const addButton = () =>(
      <select>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
    )

    return (
      <div className='details'>
        <RaisedButton label='Details' onClick={ handleOpen } />
        <Dialog
          title={title}
          actions={ actions }
          modal={false}
          open={ open }
          onRequestClose={ onRequestClose }
          titleStyle={styles.title}
        >
          <FloatingActionButton mini={true} style={styles.button} onClick={ addButton } >
            <ContentAdd />
          </FloatingActionButton>

          <h4 className='subtitle'>{ subtitle }</h4>
        
          <article>
            <img src={imageLinks.smallThumbnail} alt="Avatar" />
            {description}
          </article>

          <article>
            <h4>Authors: {authors} </h4>
            <h4>Categories: {categories} </h4>
            <h4>Language: {language.toUpperCase()} </h4>
            <h4>Published in: {publishedDate} </h4>
          </article>

          <a href={infoLink}><h4>Info or Buy</h4></a>

        </Dialog>
      </div>
    )
}

export default BookDetails

const styles ={
    
    button:{
      marginRight: '0px',
      float: 'right',
    },

    title:{
      'margin-block-end': '-2em'
    }
}
