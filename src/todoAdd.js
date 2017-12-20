import React, { Component } from 'react';
import * as firebase from 'firebase';


var fb = firebase.initializeApp({
     apiKey: "AIzaSyBBucSYR_-jHd_GY1WVnrtmTw4FtI5KM90",
    authDomain: "projects-d01b3.firebaseapp.com",
    databaseURL: "https://projects-d01b3.firebaseio.com",
    projectId: "projects-d01b3",
    storageBucket: "projects-d01b3.appspot.com",
    messagingSenderId: "894816354920"
  });

  class TodoAdd extends Component{


render(){
    return(
<div>
    <br/>
    <br/>
    <br/>
<input type='text'/><button>Add todo</button>
    <h1>wiki</h1>
</div>


    )
}

  }

export default TodoAdd;