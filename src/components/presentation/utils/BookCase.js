import React from 'react'

import Book from './Book'

const BookCase = ({ books, moveBookCategorie, styles }) => {
    
  return (
    // TODO: Styles Nunca pode ser 'undenfined', aplicar PROPS-REQUIRED
    <section style={styles.section} >
        <ol style={styles.ol} >

          {books.map((book, index) => (

            <li style={styles.li} key={index}>
              <Book book={ book } moveBookCategorie={ moveBookCategorie }> </Book>
            </li>

          ))}
        
        </ol>
    </section>
  )
}

export default BookCase
