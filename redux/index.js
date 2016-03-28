import React from 'react'
import {render} from 'react-dom'
// import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers'
// import App from '../components/App'

import {addTodo} from './actions'


let store = createStore(todoApp)

store.subscribe(function(){
    console.log(store.getState())
})


var Todos = function({todos})
{
    var todoLi = todos.map(function(item){
        return (
            <li>{item.value}</li>
        )
    })
    return (
        <ul>
            {todoLi}
        </ul>
    )
}
var TodoInput = function()
{
    return (
        <input type="text" />
    )
}

var TodoBtn = React.createClass({
    todoAdd: function(e)
    {
        e.preventDefault();
        var val = e.target.value;
        store.dispatch(addTodo(val));
    },
    render: function()
    {
        return (
            <input type="button" value="Add Todo" onClick={this.todoAdd} />
        )
    }
})


var todos = [
    {key: 1, value: 'one'},
    {key: 2, value: 'two'},
    {key: 3, value: 'three'}
]

render(
    <div>
        <Todos todos={todos}/>
        <TodoInput/>
        <TodoBtn/>
    </div>,
    document.getElementById('root')
)
