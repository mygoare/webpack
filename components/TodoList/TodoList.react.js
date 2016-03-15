import React from 'react'
import ReactDOM from 'react-dom'

import {createStore, combineStores} from 'redux'
import {Provider, connect} from 'react-redux'

// reducer, store, actionCreator

let initialState = [
    {key:1,text: 'abc', completed: true},
    {key:2,text: 'gef', completed: false},
];
var reducer = function(state=initialState, action)
{
    switch(action.type)
    {
        default:
            return state
    }
}


var TodoList = React.createClass({
	clickEvent: function(e)
  {
  	console.log(e.target.innerHTML)
  },
	render: function()
  {
  	var todos = this.props.todos;
    console.log(todos)
    var lists = todos.map((todo)=>{
    	return <Todo {...todo} onClick={this.clickEvent}/>
    })
    return (
    	<div>
	      {lists}
      </div>
    )
  }
});
var TodoListMapStateToProps = function(state)
{
    return {
        todos: state
    }
}
var TodoListMapDispatchToProps = function(dispatch)
{

}
TodoList = connect(TodoListMapStateToProps)(TodoList)

var Todo = ({key, text, onClick, completed})=>
{
	return (
  	     <div key={key} style={{textDecoration: completed?'line-through':'none'}} onClick={onClick}>{text}</div>
    )
}
var App = ()=>{
	return (
      	<div>
            <h1>Todo List</h1>
    		<TodoList />
        </div>
  )
}

var data=[
    {text: 'a'},
    {text: 'b'}
]

var store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('container')
);
