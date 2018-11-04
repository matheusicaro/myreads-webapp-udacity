/*
* DESCRIPTION
*
* Api from the library provided by Udacity, always returns the shelf of 
* books organized by category. Thus, if an error occurs when changing 
* this category, an error is reported by this component that has this 
* function only, because the API always returns 200 even if the category
* does not exist in this api.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

export const verifyReturnUpdate = (result, book) => {

    const { id } = book
    let isError = true;
  
    // PERCORE ALL THE ELEMENTS AND CHECK IF THE BOOK IS IN THE SHELF,
    // CASE WAS NOT FOUND, LAUNCH ERROR AND RETURN TRUE
    for (const key in result) {
      result[key].map(bookId => {
        if (bookId === id) isError = false
      })
    }
  
    if (isError) {
      window.alert('Error ao mudar o livro de categoria');
      return true;
    }
  
    return false;
  }