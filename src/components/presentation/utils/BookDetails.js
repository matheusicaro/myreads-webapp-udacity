/*
* DESCRIPTION
*
* This component is reusable and responsible for the popup that contains more details of the books,
* being triggered by the click of the 'details' button.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import PropTypes from 'prop-types';

import './BookDetails.css'

const BookDetails = ({ handleOpen, onRequestClose, open, title, subtitle, imageLinks, authors,
  infoLink, categories, description, language, publishedDate }) => {


  const actions = [
    <FlatButton
      label="Close"
      primary={true}
      onClick={onRequestClose}
    />,
  ];

  return (
    <div className='details'>
      <RaisedButton label='Details' onClick={handleOpen} style={styles.rasedButton} labelColor={styles.rasedButton.labelColor} />
      <Dialog
        title={title}
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={onRequestClose}
        titleStyle={styles.title}
        bodyStyle={styles.bodyStyle}
      >

        {subtitle && <h4><span className="subtitle">{subtitle}</span></h4>}

        <article style={styles.article} >
          <div className="img-description">
            <img src={imageLinks.smallThumbnail} alt="Avatar" />
          </div>

          {description}
        </article>

        <aside className="atributes">
          <h4><b> Authors:</b> {authors} </h4>
          <h4><b> Categories:</b> {categories} </h4>
          <h4><b> Language:</b>  {language.toUpperCase()}</h4>
          <h4><b> Published in:</b>  {publishedDate} </h4>
          <a href={infoLink}> <h4 style={{color:"#5858FA"}}> Mais informações ou Comprar </h4></a>
        </aside>

      </Dialog>
    </div>
  )
}

export default BookDetails

BookDetails.propTypes = {

  handleOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageLinks: PropTypes.object.isRequired,
  authors: PropTypes.array,
  infoLink: PropTypes.string,
  categories: PropTypes.array,
  description: PropTypes.string,
  language: PropTypes.string,
  publishedDate: PropTypes.string,

};

const styles = {

  button: {
    marginRight: '0px',
    float: 'right',
  },

  title: {
    marginBlockEnd: '-2em',
    color: 'rgb(0, 151, 167)'
  },

  bodyStyle: {
    overflowY: 'scroll',
    marginTop: '6%',
  },

  rasedButton: {
    boxShadow: '0',
    labelColor: 'rgb(0, 151, 167)'
  },

  article:{
    display: 'flex'
  }
}
