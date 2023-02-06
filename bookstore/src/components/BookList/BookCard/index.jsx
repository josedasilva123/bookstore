import React from 'react'
import { StyledBookCard } from './style'

const BookCard = ({book, addMyBook}) => {
  return (
    <StyledBookCard>
        <h3>{book.name}</h3>
        <p className='numberPages'>{book.numberPages}</p>
        <p className='author'>{book.art}</p>
        <button onClick={() => addMyBook(book)}>Adicionar livro</button>
    </StyledBookCard>
  )
}

export default BookCard