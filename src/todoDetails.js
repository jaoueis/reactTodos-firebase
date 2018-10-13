import React from 'react';

export class TodoDetails extends React.Component {  
    render() {
      return (
        <div className="p-3 shadow-sm">
          <h2>Todo Details</h2>
          <hr />
          <form>
              <input name="id" type="hidden" value={this.props.currentItem.id} />
              <input type="text" name="text" value={this.props.currentItem.text} />
              <input type="text" name="status" value={this.props.currentItem.status} />
              <button type="submit">Submit</button>
          </form>
          <h3>{this.props.currentItem.text}</h3>
          <span>{this.props.currentItem.id}</span>
          <br />
          <span className="badge badge-primary badge-pill">{this.props.currentItem.status}</span>
        </div>
      );
    }
  }