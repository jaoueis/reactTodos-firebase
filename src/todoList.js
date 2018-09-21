import React from "react";
import ReactDOM from "react-dom";

class TodoList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      text: '',  
      items: []
    }
  }

  handleChange (e) {
    this.setState({text: e.target.value})
  }

  addTask (e){
      this.setState({
          text:'',
          items:[this.state.items]
      });
  }

  render () {
    return (
      <div className='todoListMain'>
        <div className='header'>
          <form onSubmit={this.addTask}>
            <input
              id='new-todo'
              onChange={this.handleChange}
              value={this.state.text}
              placeholder='Enter task...'>
            </input>
            <button type='submit'>
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

class todoLists extends React.Component  {
    render (){
        return(
            <ul>
                {this.props.items.map(item => (
                    <li>{item.text}</li>
                ))}
            </ul>
        );
    }
}

export default TodoList
