var nextTodoId = 0;
const addTodo = (text)=> {
    return {
        type: 'ADD_TODO',
        key: nextTodoId++,
        text
    }
}

export {addTodo}
