import React from 'react';

export class TodoDetails extends React.Component {
  render() {
    return (
      <div className="p-3 shadow-sm">
        <h2>Todo Details</h2>
        <hr />
        <h3>{this.props.currentItem.text}</h3>
        <span>{this.props.currentItem.id}</span>
        <br />
        <span className="badge badge-primary badge-pill">{this.props.currentItem.status}</span>
        <form>
          <input type="hidden" name="id" value={this.props.currentItem.id} readOnly/><br /><br />
          <input type="text" name="editText" value={this.props.currentItem.text} onChange={this.handleEdit}/><br /><br />
          <select name="editStatus" value={this.props.currentItem.status} onChange={this.handleEdit}>
            <option value="initial">Initial</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}