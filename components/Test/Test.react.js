import React from 'react';
import ReactDOM from 'react-dom';

function cr(component, props, ...children)
{
    return React.createElement(component, props || {}, ...children);
}

function MakeA({href, content})
{
    return cr('a', {href: href}, content);
}
function MakeDiv({className, children})
{
    return cr('div', {className: className}, children)
}

function MakeList() {
    return (
        cr(MakeDiv, {className: 'list'}, 'Make div',
            cr(MakeA, {href: 'http://www.google.com', content: 'Google'}),
            cr(MakeA, {href: 'http://www.baidu.com', content: 'Baidu'})
        )
    )
}

var TestComponent = ReactDOM.render(<MakeList/>, document.getElementById('test'));
// export {MakeA, MakeDiv, MakeList}
