import { useState, useEffect } from "react";
import BooksList from "./components/BookList";
import MyBookList from "./components/MyBookList";
import { api } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledContainer } from "./styles/grid";
import { StyledHomePageFlexGrid } from "./styles/home";

function App() {
   /* Centralizar meu módulo lógico no App */
   const localMyBooksList = localStorage.getItem("@MYBOOKS");
   const [booksList, setBooksList] = useState([]);
   const [myBooksList, setMyBooksList] = useState(localMyBooksList ? JSON.parse(localMyBooksList) : []);
   const [search, setSearch] = useState("");

   useEffect(() => {
      (async () => {
         try {
            const response = await api.get("/books");
            setBooksList(response.data);
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   useEffect(() => {
      localStorage.setItem("@MYBOOKS", JSON.stringify(myBooksList));
   }, [myBooksList]);

   const totalPages = myBooksList.reduce((acc, book) => {
      return acc + book.numberPages;
   }, 0);

   const addMyBook = (book) => {
      /* some, find */
      //O livro que estou adicionando NÃO está na lista?
      if (!myBooksList.some((b) => b.id === book.id)) {
         setMyBooksList([...myBooksList, book]); //Minha lista de livros lidos
         toast.success("O livro foi adicionado com sucesso!", {
            autoClose: 2000,
         });
      } else {
         toast.warning("Está livro já está na sua lista!", {
            autoClose: 2000,
         });
      }
   };

   const removeMyBook = (bookId) => {
      const newList = myBooksList.filter((book) => book.id !== bookId);
      setMyBooksList(newList);
      toast.success("O livro foi removido com sucesso!", {
         autoClose: 2000,
      });
   };

   const removeAllMyBooks = () => {
      setMyBooksList([]);
      toast.success("Lista de livros limpa com sucesso!");
   };

   /* onMount, onUpdate, onDismount */
   // Quando eu quero que isso aconteça?

   return (
      <div className="App">
         <StyledContainer>
            <StyledHomePageFlexGrid>
               <div className="left">
                  <BooksList booksList={booksList} addMyBook={addMyBook} />
               </div>
               <div className="right">
                  <MyBookList
                     myBooksList={myBooksList}
                     removeMyBook={removeMyBook}
                     removeAllMyBooks={removeAllMyBooks}
                     totalPages={totalPages}
                  />
               </div>
            </StyledHomePageFlexGrid>
         </StyledContainer>

         <ToastContainer
            position="top-right"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
      </div>
   );
}

export default App;
