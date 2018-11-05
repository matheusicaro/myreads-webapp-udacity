/*
* DESCRIPTION
*
* Component responsible for the logic of the data passed
* in the visualization component 'book details'.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookDetails from './BookDetails'

export default class BookDetailsContainer extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        const { book, language } = this.props;
        const { open } = this.state;

        return (

            <BookDetails
                handleOpen={this.handleOpen}
                open={open}
                onRequestClose={this.handleClose}
                
                title={book.title}
                subtitle={book.subtitle}
                imageLinks={book.imageLinks}
                authors={book.authors}
                infoLink={book.infoLink}
                categories= {book.categories}
                description= {book.description}
                bookLanguage= {book.language}
                publishedDate= {book.publishedDate}

                language={language}
            >
            </BookDetails>
        );
    }
}

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
    bookLanguage: PropTypes.string,
    language: PropTypes.object.isRequired,
    publishedDate: PropTypes.string,
  };