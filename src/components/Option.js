import React, { Component } from "react";
import { update } from "../BooksAPI";

export default class Option extends Component {
  handleChange = (e) => {
    this.props.updatingShelfBook(e, this.props.book);
  };
  render() {
    // console.log(this.props.book);
    return (
      <select onChange={this.handleChange}>
        <option value="target" disabled>
          Move to...
        </option>
        <option value="" hidden></option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    );
  }
}
