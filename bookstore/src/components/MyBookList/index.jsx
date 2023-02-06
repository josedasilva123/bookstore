import React from "react";
import MyBookCard from "./MyBookCard";

const MyBookList = ({ myBooksList, removeMyBook, removeAllMyBooks, totalPages }) => {
   return (
      <div>
         <h2>Meus livros</h2>
         {myBooksList.length > 0 ? (
            <>
               <ul>
                  {myBooksList.map((book) => (
                     <MyBookCard key={book.id} book={book} removeMyBook={removeMyBook} />
                  ))}
               </ul>
               <span>Páginas lídas: {totalPages}</span>
               <button onClick={() => removeAllMyBooks()}>Limpar lista</button>               
            </>
         ) : (
            <p>Não foi adicionado nenhum livro.</p>
         )}
      </div>
   );
};

export default MyBookList;
