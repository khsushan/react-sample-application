import React, { Component } from 'react';
import TodoItem  from './TodoItem'

class Todos extends Component {
  render() {
    let todoItemsPrint;
    if(this.props.todos){
      todoItemsPrint = this.props.todos.map(todo=>{
          return(
            <TodoItem key={todo.title} todo={todo} />
          );
      });
    }
    return (
      <div className="Todos">
         <h3>Todos</h3>
        {todoItemsPrint}
      </div>
    );
  }
}

export default Todos;
