import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


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
          bodyStyle={styles.bodyStyle}
        >

          {subtitle && <h4><span className="subtitle">{ subtitle }</span></h4> }
        
          <article >
            <img src={imageLinks.smallThumbnail} alt="Avatar" />
            {description}
          </article>

          <aside className="others-atributes">
            <h4><b> Authors:</b> {authors} </h4>
            <h4><b> Categories:</b> {categories} </h4>
            <h4><b> Language:</b>  {language.toUpperCase()}</h4>
            <h4><b> Published in:</b>  {publishedDate} </h4>
            <a href={infoLink}> <h4>Info or Buy</h4> </a>
          </aside>
 
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
      'margin-block-end': '-2em',
    },

    bodyStyle:{
      'overflow-y': 'scroll',
      'margin-top': '6%',

    }
}
