import React from 'react'
import BookCard from './BookCard'
import { StyledBookList } from './style'

const BooksList = ({booksList, addMyBook}) => {
  return (
    <StyledBookList>
        {booksList.map(book => (
            <BookCard key={book.id} book={book} addMyBook={addMyBook} />
        ))}
    </StyledBookList>
  )
}

export default BooksList