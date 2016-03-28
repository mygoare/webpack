import {combineReducers} from 'redux'
import todos from './todos'

const todoApp = combineReducers({
    items: todos
})

export default todoApp
