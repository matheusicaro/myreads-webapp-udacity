
import { update } from '../BooksAPI'

export default class UpdateMoveAPI {
  move (book, newCategorieBook) {
    // PERFORMS THE UPDATE IN THE BOOK'S API WITH A NEW CATEGORY.

    update(book, newCategorieBook).then((result) => {
      // UPDATE TREATMENT === FAIL, BECAUSE API ALWAYS RETURNS 200. ANALYZE THROUGH RESULT
      if (result) {
        let updateState = this.verifyReturnUpdate(result, book)

        if (updateState !== 200) {
          return updateState
        } else {
          return 400
        }
      }
    })

    return 200
  }

  verifyReturnUpdate (result, book) {
    const { id } = book
    let isError = true

    // PERCORE ALL THE ELEMENTS AND CHECK IF THE BOOK IS IN THE SHELF,
    // CASE WAS NOT FOUND, LAUNCH ERROR AND RETURN TRUE
    for (const key in result) {
      result[key].forEach(bookId => {
        if (bookId === id) isError = false
      })
    }
    return ((isError) ? 500 : 200)
  }
}
