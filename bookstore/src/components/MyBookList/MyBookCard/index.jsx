import React from 'react'

const MyBookCard = ({book, removeMyBook}) => {
  return (
    <li>
        <span>{book.name}</span>
        <button onClick={() => removeMyBook(book.id)}>Remover livro!</button>
    </li>
  )
}

export default MyBookCard