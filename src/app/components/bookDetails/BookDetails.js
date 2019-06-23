/*
* DESCRIPTION
*
* This component is reusable and responsible for the popup that contains more details of the books,
* being triggered by the click of the 'details' button.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

import PropTypes from 'prop-types'

import './BookDetails.scss'
import { MyContext } from '../../Context'
import { STYLES } from '../../constants'

const BookDetails = ({ handleOpen, onRequestClose, open, title, subtitle, imageLinks, authors,
  infoLink, categories, description, bookLanguage, publishedDate, language }) => {
  const actions = [
    <FlatButton
      label={language.btnClose}
      primary
      onClick={onRequestClose}
    />
  ]

  return (
    <MyContext.Consumer>
      {({ state }) => {
        const styles = {
          title: {
            marginBlockEnd: '-2em',
            color: STYLES.theme.title[state.theme]
          },
          bodyStyle: {
            marginTop: '6%',
            color: STYLES.theme.text[state.theme]
          }
        }

        return (
          <div className={`book-details-${state.theme}`}>
            <RaisedButton buttonStyle={{ borderRadius: '7px' }}
              label={language.btnDetails} onClick={handleOpen}
              style={defaultStyles.rasedButton} labelColor={defaultStyles.rasedButton.labelColor}
            />
            <Dialog
              title={title}
              actions={actions}
              modal={false}
              open={open}
              onRequestClose={onRequestClose}
              titleStyle={styles.title}
              contentClassName={`book-details-background-${state.theme}`}
              autoScrollBodyContent
              bodyStyle={styles.bodyStyle}
            >

              <h4 style={defaultStyles.subtitle[state.theme]}> { (subtitle) || (title) } </h4>

              <article>
                <span style={defaultStyles.imgDescription}>
                  <img src={imageLinks.smallThumbnail} alt='Avatar' />
                </span>

                {description}
              </article>

              <aside style={defaultStyles.infoAtributes.root}>
                <div style={defaultStyles.infoAtributes.atribute}><b>{ language.authors }</b> {(authors) || '--' } </div>
                <div style={defaultStyles.infoAtributes.atribute}><b>{ language.categories }</b> {(categories) || '--' } </div>
                <div style={defaultStyles.infoAtributes.atribute}><b>{ language.language }</b>  {bookLanguage.toUpperCase()}</div>
                <div style={defaultStyles.infoAtributes.atribute}><b>{ language.publishedIn }</b>  {(publishedDate) || '--' } </div>
                <div style={defaultStyles.infoAtributes.atributeLink}> <a href={infoLink}> <b>{ language.buy }</b></a></div>
              </aside>

            </Dialog>
          </div>
        )
      }}
    </MyContext.Consumer>
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
  language: PropTypes.object.isRequired,
  publishedDate: PropTypes.string

}

const defaultStyles = {

  subtitle: {
    DARK: {
      color: 'white'
    },
    LIGHT: {
      color: 'black'
    }
  },

  button: {
    marginRight: '0px',
    float: 'right'
  },

  rasedButton: {
    boxShadow: '0',
    background: 'transparent'
  },

  imgDescription: {
    padding: '5px 15px 10px 0px',
    float: 'left'
  },

  infoAtributes: {
    root: {
      padding: '3% 0% 0% 0%'
    },

    atribute: {
      padding: '1% 0% 0% 0%'
    },

    atributeLink: {
      padding: '1% 0% 0% 0%'
    }
  }
}
