import React from "react";
import Option from "./Option";

export default function ResultSearch({
  updatingShelfBook,
  books,
  result,
  error,
}) {
  console.log(result);
  return (
    <ol className="books-grid">
      {!error ? (
        result ? (
          result.map((book) => {
            return <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                      backgroundImage: `url(${book.imageLinks &&
                         book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "https://static.wikia.nocookie.net/marvelcomicsfanon/images/3/3f/No_Image_Cover.jpg/revision/latest?cb=20180530112213"})` }} />
                    <div className="book-shelf-changer">
                      <Option updatingShelfBook={updatingShelfBook} book={book} />
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">
                    {book.publisher}
                  </div>
                </div>
              </li>;
          })
        ) : (
          <h4>looading</h4>
        )
      ) : (
        <div>
        <h1>Search for something </h1>
        </div>
        
      )}
    </ol>
  );
}
