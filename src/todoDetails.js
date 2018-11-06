import React from 'react';
import firebase from "./firebase";

export class TodoDetails extends React.Component {
  constructor() {
    super();
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
    //console.log(this.state);
    e.preventDefault();
    let editID = document.querySelector('#editID');
    let editText = document.querySelector('#editText');
    let editStatus = document.querySelector('#editStatus');
    //console.log(editID.value);
    const itemsRef = firebase.database().ref("items").child(editID.value);
    !editText.value.length ? editText.value = this.props.currentItem.text : editText.value
    const editItem = {
      id: editID.value,
      text: editText.value,
      status: editStatus.value
    };
    itemsRef.update(editItem);
    editID.value = "";
    editText.value = "";
    editStatus.value = "";
  }

  render() {
    return (
      <div className="p-3 shadow-sm">
        <h2>Todo Details</h2>
        <hr />
        <h3>{this.props.currentItem.text}</h3>
        <span>{this.props.currentItem.id}</span>
        <br />
        <span className={"badge badge-primary badge-pill " + this.props.currentItem.status}>{this.props.currentItem.status}</span><br /><br />
        <hr />
        <h2>Edit Todo</h2>
        <form onSubmit={this.handleUpdate} className="form-group">
          <input className="form-control" type="hidden" name="id" id="editID" value={this.props.currentItem.id} readOnly /><br />
          <input className="form-control" type="text" name="newText" id="editText" /><br />
          <select className="form-control" name="newStatus" id="editStatus">
            <option value="Initial">Initial</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select><br />
          <button type="submit" className="btn btn-dark">Edit Todo</button>
        </form>
      </div>
    );
  }
}