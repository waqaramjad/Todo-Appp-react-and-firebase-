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

    firebase.database().ref('/todos').on('child_added', (data) => {
        let obj = data.val();
        obj.id = data.key;
        var currentTodos = this.state.todos;
        currentTodos.push(obj);
        this.setState({ todos: currentTodos })
        // console.log(this.state.todos, 'obj');
    })
}




render(){

    return(
<div>
{this.state.todos.map((v, i) => {
                    {  console.log(i, 'i')}
                    {  console.log(v, 'v')}
                    return (
                        <h1 >{v.todo} </h1>
                    )
                })
                }
                <br />   <br />

               {/* {(this.state.editTodo) ? <Edittodo editObj={this.state.editObj} editingHandler={this.toggleEdit}></Edittodo> : ''} */}


</div>


    )
}



}

export default Todo; 