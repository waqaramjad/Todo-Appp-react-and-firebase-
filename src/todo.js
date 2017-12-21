import React, { Component } from 'react';
import * as firebase from 'firebase';

class Todo extends Component
{
constructor(props)
{
    super(props);
    this.state = {
        todos: [],
       
    };

    firebase.database().ref('/').child('todos').on('child_added',(ev)=>
{
// console.log('ev',ev)
// console.log('ev.val()',ev.val())
// console.log('ev.key()',ev.key)

let todoValue = ev.val();
todoValue.id = ev.key;
let dummyState = this.state.todos
dummyState.push(todoValue);
this.setState({
    todos : dummyState
})
// console.log('this.state.todos',this.state.todos)



})
}




render(){

    return(
<div>
{this.state.todos.map((values, numbers) =>{
    console.log('values', values)
    // console.log('values', numbers)
    return(
        <div>

{/* <h1 key={values.key}>{values.todosirug}</h1> */}
<h1 key={numbers.toString()}>{values.todos} </h1>

        </div>
    )
})}



</div>


    )




}
}

{/* 
 render() {
    return (
        <div>
            {this.state.todos.map((v, i) => {
                {  console.log(i, 'i')}
                {  console.log(v.todo, 'v')}
                return (
                    <h1 key={i}>
                    {v.todo} 
                    {(!this.state.editTodo) ? (<span>
                        <button data-id={v.id} onClick={this.deleteTodoHandler}>Delete</button> <button data-id={v.id} data-todo={v.todo} onClick={this.editTodoHandler}>Edit</button></span>) : ''}</h1>
                )
            })
            }
            <br />   <br />

           {(this.state.editTodo) ? <Edittodo editObj={this.state.editObj} editingHandler={this.toggleEdit}></Edittodo> : ''}

        </div>
    )

} */} 


export default Todo; 