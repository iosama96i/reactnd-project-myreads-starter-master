import React, { Component } from "react";
import Option from "../Option";

export default class Book extends Component {
  render() {
    const { book, updatingShelfBook } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  book.imageLinks && book.imageLinks.thumbnail
                    ? book.imageLinks.thumbnail
                    : "https://static.wikia.nocookie.net/marvelcomicsfanon/images/3/3f/No_Image_Cover.jpg/revision/latest?cb=20180530112213"
                })`,
              }}
            />

            <div className="book-shelf-changer">
              <Option book={book} updatingShelfBook={updatingShelfBook} />
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.publisher}</div>
        </div>
      </li>
    );
  }
}
