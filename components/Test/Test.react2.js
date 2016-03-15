import React from 'react';
import ReactDOM from 'react-dom';

function makeA({href, content})
{
    return React.createElement('a', {href: href}, content);
}
function makeDiv({className, children})
{
    return React.createElement('div', {className: className}, children);
}

function List (){
    return (
        React.createElement(makeDiv, {className: 'list'},
            'Make Div',
            makeA({href:'http://www.google.com', content:'Google'}),
            makeA({href:'http://www.baidu.com',  content:'Baidu'})
        )
    )
}

var TestComponent = ReactDOM.render(<List/>, document.getElementById('test'));
