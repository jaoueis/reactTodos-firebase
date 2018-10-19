import React from 'react';
import firebase from "./firebase";

export class TodoDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      newText: '',
      newStatus: ''
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleEdit(e) {
    this.setState({ [e.target.name]: e.target.value });
    //console.log({ [e.target.name]: e.target.value });
  }

  handleUpdate(e) {
    console.log(this.state);
    e.preventDefault();
    if (!this.state.id.length) {
      return;
    } else {
      const itemsRef = firebase.database().ref(this.state.id);
      const editItem = {
        id: this.state.id,
        text: this.state.newText,
        status: this.state.newStatus
      };
      itemsRef.update(editItem);
    }
  }

  render() {
    return (
      <div className="p-3 shadow-sm">
        <h2>Todo Details</h2>
        <hr />
        <h3>{this.props.currentItem.text}</h3>
        <span>{this.props.currentItem.id}</span>
        <br />
        <span className="badge badge-primary badge-pill">{this.props.currentItem.status}</span>
        <form onSubmit={this.handleUpdate} className="form-group">
          <input className="form-control" type="hidden" name="id" value={this.props.currentItem.id} readOnly onChange={this.handleEdit} /><br />
          <input className="form-control" type="text" name="newText" onChange={this.handleEdit} /><br />
          <select className="form-control" name="newStatus" onChange={this.handleEdit}>
            <option value="initial">Initial</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select><br />
          <button type="submit" className="btn btn-dark">Edit Todo</button>
        </form>
      </div>
    );
  }
}