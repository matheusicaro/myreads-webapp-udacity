import React from 'react';
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
        
          <article style={{display: 'flex'}}>

            <div className="img-description">
              <img src={imageLinks.smallThumbnail} alt="Avatar" />
            </div>

              { description }
            
          </article>

          <aside className="atributes">
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
