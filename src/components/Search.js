import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import ResultSearch from "./ResultSearch";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Search: "",
      result: [],
      error: false,
    };
  }

  handleChange = async (e) => {
    const query = e.target.value;
    this.setState({
      Search: query,
    });
    if (query) {
      await search(query).then((bookRes) => {
        console.log(bookRes);
        bookRes.length > 0
          ? this.setState({
              result: bookRes,
              error: false,
            })
          : this.setState({
              result: [],
              error: true,
            });
      });
    } else {
      this.setState({ result: [], error: false });
    }
  };

  render() {
    const { books, updatingShelfBook } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.Search}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ResultSearch
            error={this.state.error}
            books={books}
            updatingShelfBook={updatingShelfBook}
            result={this.state.result}
          />
        </div>
      </div>
    );
  }
}
