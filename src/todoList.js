import React, { Component } from "react";

class TodoList extends Component {
constructor(props) {
    super(props);

    this.state = {
        items:[]
    };

    this.addTask = this.addItem.bind(this);
}

addTask(e){
    
}

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addTask}>
                        <input id="new-todo" onChange={this.handleChange} value={this.state.text} placeholder="Enter task...">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    }

    handleChange(e){
        this.setState({text: e.target.value});
    }
}

export default TodoList;