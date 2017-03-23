import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.id}</strong> : {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
