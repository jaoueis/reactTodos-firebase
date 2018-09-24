import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className='todoListMain'>
        <div className='header'>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Enter new task here..." id="new-todo" value={this.state.text} onChange={this.handleChange} />
            <button type="submit">Add Task #{this.state.items.length + 1}</button>
          </form>
        </div>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    } else {
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ol>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ol>
    );
  }
}

export default App
