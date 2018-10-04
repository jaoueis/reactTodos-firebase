import React from "react";
import firebase from "./firebase";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    } else {
      const itemsRef = firebase.database().ref("items");
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      itemsRef.push(newItem);
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: items[item].id,
          text: items[item].text
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return (
      <div className="todoListMain row">
        <div className="header col-12 col-lg-1 text-center p-3">
          <h1>
            <i className="fab fa-react" /> React Todo List
          </h1>
        </div>
        <div className="add col-12 col-md-5 p-3 bg-light">
          <div className="form-wrap p-3 shadow-sm">
            <h2>Add Your Todos</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Enter new task here..." id="new-todo" value={this.state.text} onChange={this.handleChange} mclassName="form-control" />
              </div>
              <button type="submit" className="btn btn-dark">
                Add Task #{this.state.items.length + 1}
              </button>
            </form>
          </div>
          <div className="list-wrap mt-3 p-3 shadow-sm">
            <h2>Your Todo List</h2>
            <TodoList items={this.state.items} />
          </div>
        </div>
        <div className="list col-12 col-md-6 p-3" />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.items.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <a href={"?id=" + item.id}>{item.text}</a>
            <span className="badge badge-primary badge-pill">{item.id}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
