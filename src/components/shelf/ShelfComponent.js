import React, { Component } from "react";

export default class ShelfComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const options = [
      { label: "Currently Reading", value: "currentlyReading" },
      { label: "want to Read", value: "ٌwantToRead" },
      { label: "Read", value: "Read" },
    ];
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{ width: 128, height: 193, backgroundImage: `url()` }}
            />
            <div className="book-shelf-changer">
            {options.map((option)=>{
                return (
            <select  key={option.id}>
            <option value="move" disabled>
                  Move to...
                </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>)
                })}
            </div>
          </div>
          <div className="book-title">title</div>
          <div className="book-authors">publisher</div>
        </div>
      </li>
    );
  }
}
