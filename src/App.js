import TodoItem from "./components/TodoItem";
import "./App.css";
import todosData from "./components/todosData";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange=this.handleChange.bind(this)
  }
   handleChange(id){
     this.setState(prevState=>{
       const updatedTodos=prevState.todos.map(todo=>{
         if (todo.id===id){
           todo.completed=!todo.completed
         }
         return todo
       } )
       return updatedTodos
     })

   }
  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>
    ));
    return <div className="todo-list">{todoItems}</div>;
  }
}
