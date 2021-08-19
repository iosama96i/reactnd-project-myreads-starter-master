import React from "react";
import { getAll, update } from "./BooksAPI";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import ShelfBooks from "./components/ShelfBooks";
import TestShelf from "./components/TestShelf";

class BooksApp extends React.Component {
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
      // console.log(this.state.shelfCatagories);
    });
  }

  updatingShelfBook = async (e, book) => {
    await update(book, e.target.value);
    getAll().then((data) => {
      this.setState({
        books: data,
      });
    });
    console.log(this.state.book);
  };
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <ShelfBooks
                  books={this.state.books}
                  shelfCatagories={this.state.shelfCatagories}
                  updatingShelfBook={this.updatingShelfBook}
                />
              )}
            />
            <Route
              path="/search"
              render={() => (
                <Search
                  books={this.state.books}
                  updatingShelfBook={this.updatingShelfBook}
                />
              )}
            />
            <Route path="/test" component={TestShelf} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
