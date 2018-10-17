import React from 'react';

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let currentID = e.currentTarget.getAttribute('data-id');
    this.props.onChange(currentID);
    console.log(currentID);
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.items.map((item) =>
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <button onClick={this.handleClick} data-id={item.id}>{item.text}</button>
            <span className="badge badge-primary badge-pill">{item.id}</span>
            <span className="badge badge-primary badge-pill">{item.status}</span>
          </li>
        )}
      </ul>
    );
  }
}