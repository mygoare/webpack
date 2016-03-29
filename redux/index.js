import React from 'react'
import {render} from 'react-dom'
import PubSub from 'pubsub-js'
// import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers'

import {addTodo} from './actions'


let store = createStore(todoApp)

store.subscribe(function(){
    console.log(store.getState())
})


var mySubscriber = function( msg, data ){
    console.log( msg, data );
};
var token = PubSub.subscribe( 'MY TOPIC', mySubscriber );

// publish a topic asyncronously
PubSub.publish( 'MY TOPIC', 'hello world!' );


// components
var List = function({lists, onListClick})
{
    var lis = lists.map(function(list){
        return (
            <li onClick={(e)=>{return onListClick(e)}}>{list}</li>
        )
    })

    return (
        <ul>
            {lis}
        </ul>
    )
}
var Input = function({placeholder, value})
{
    return (
        <input type="text" placeholder={placeholder} value={value} />
    )
}
var Btn = function({onBtnClick})
{
    return (
        <input type="button" value="Add Todo" onClick={onBtnClick} />
    )
}

// containers
var TodoContainer = React.createClass({
    getInitialState: function()
    {
        return {todos: []}
    },
    componentDidMount: function()
    {
        store.subscribe(()=>{
            var newTodos = store.getState().items;

            this.setState({todos: newTodos})
        });
    },
    add: function()
    {
        var val = this.refs.input.value;
        console.log('on clicked', val);
        store.dispatch(addTodo(val));

        this.refs.input.value = '';
    },
    onListClick: function(e)
    {
        console.log('list clicked', e.target.innerHTML);
    },
    render: function()
    {
        var todos = this.state.todos;
        return (
            <div>
                <List lists={todos} onListClick={this.onListClick}/>
                <Input />
                <Btn onBtnClick={this.add}/>
            </div>
        )
    }
})

render(
    <TodoContainer />,
    document.getElementById('root')
)
