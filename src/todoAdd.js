import React, { Component } from 'react';
import * as firebase from 'firebase';
import Todo from './todo'


var fb = firebase.initializeApp({
     apiKey: "AIzaSyBBucSYR_-jHd_GY1WVnrtmTw4FtI5KM90",
    authDomain: "projects-d01b3.firebaseapp.com",
    databaseURL: "https://projects-d01b3.firebaseio.com",
    projectId: "projects-d01b3",
    storageBucket: "projects-d01b3.appspot.com",
    messagingSenderId: "894816354920"
  });

  class TodoAdd extends Component{

    constructor(props) {
        super(props);
        // this.deleteTodo = this.deleteTodo.bind(this);
      
        this.state = { todos: [] };
        this.addTodo = this.addTodo.bind(this)
      }


addTodo(ev){
    ev.preventDefault()   

   let todoList = this.state.todos;
   todoList.push(this.refs.todoValue.value)
   console.log(this.refs.todoValue.value);
   this.refs.todoValue.value = ''
   this.setState({
       todos: todoList
    })
    console.log(this.state.todos);
 
}

render(){
    return(
<div>
    <br/>
    <br/>
    <br/>
    <form >


<input type='text' ref='todoValue'/>
<button onClick={this.addTodo}>Add todo</button>
    <h1>wiki</h1>
    </form>

<Todo></Todo>
</div>

    )
}

  }

export default TodoAdd;