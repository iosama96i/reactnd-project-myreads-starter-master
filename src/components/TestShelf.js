import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../BooksAPI";
import ShelfComponent from "./shelf/ShelfComponent";

export default class TestShelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      shelfCatagories: [],
    };
  }

  componentDidMount() {
    getAll().then((data) => {
      this.setState({
        books: data,
        shelfCatagories: [
          new Set(
            data.map((cataName) => {
              return cataName.shelf;
            })
          ),
        ],
      });
    });
  }

  currentlyReading = (books) => {
    this.state.books.filter((book) => books.shelf === "currentlyReading");
  };

  render() {
    const currentlyReading = this.state.books.filter(
      (books) => books.shelf === "currentlyReading"
    );
    const wantToRead = this.state.books.filter(
      (books) => books.shelf === "wantToRead"
    );
    const read = this.state.books.filter((books) => books.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid" />
                <ShelfComponent />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read </h2>
              <div className="bookshelf-books">
                <ol className="books-grid" />
                <ShelfComponent />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid" />
                <ShelfComponent />
              </div>
            </div>
            ;
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
