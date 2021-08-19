import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./shelf/Book";

export default class ShelfBooks extends Component {
  render() {
    const { books, shelfCatagories, updatingShelfBook } = this.props;
    // console.log(this.props);
    const labels = [
      { labelName: "Currently Reading", catagory: "currentlyReading" },
      { labelName: "Want to Read", catagory: "wantToRead" },
      { labelName: "Read", catagory: "read" },
    ];

    // console.log(shelfCatagories[0]);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {labels.map((label, index) => {
              const filterCatagories = books.filter(
                (book) => book.shelf === label.catagory
              );
              // console.log(filterCatagories);
              return (
                <div className="bookshelf" key={index}>
                  <h2 className="bookshelf-title">{label.labelName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {filterCatagories.map((book) => {
                        return <Book updatingShelfBook={updatingShelfBook} key={book.id} book={book} />;
                      })}
                    </ol>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>/* here you put links*/ Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}
