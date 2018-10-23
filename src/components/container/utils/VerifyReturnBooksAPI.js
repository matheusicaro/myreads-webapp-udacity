
// API DA BIBLIOTECA SEMPRE RETORNA A PRATELEIRA DE LIVROS ORGANIZADA PELA CATEGORIA,
// CASO O DE ERRO AO REALIZAR UPDATE EM QUE A CATEGORIA INFORMADA NAO EXISTA, A API SEMPRE RETORNA A PRATELEIRA.
export const verifyReturnUpdate = (result, book) => {

    const { id } = book
    let isError = true;
  
    // PERCORRE TODOS OS ELEMENTOS E VERIFICA SE O LIVRO ESTÁ NA PRATELEIRA, CASO NÃO FOI ENCONTRADO, LANÇAR ERROR E RETURN TRUE
    for (const key in result) {
      result[key].map(bookId => {
        if (bookId === id) isError = false
      })
    }
  
    if (isError) {
      window.alert('Error ao mudar o book de categoria');
      return true;
    }
  
    return false;
  }