import React from 'react';
import ReactDOM from 'react-dom';
import {CommentBox} from './components/CommentBox/CommentBox.react'

import {SparklineLine} from './components/Sparkline/Sparkline.react'

import './components/Test/Test.react.js'
import './components/TodoList/Todolist.react.js'

import {TestWrapper, TestContent} from './components/TestWrapper/TestWrapper.react'

var Container = React.createClass({
    render: function()
    {
        return (
            <div className="container">
                <CommentBox url='http://localhost:8081/data' pollInterval="2000"/>
                <SparklineLine/>

                <TestWrapper>
                    <TestContent content={"Test Content in Test Wrapper"}/>
                </TestWrapper>
            </div>
        )
    }
});

ReactDOM.render(
    <Container/>,
    document.getElementById('example'),
    function(){
        console.log('ReactDOM rendered');
    }
);
