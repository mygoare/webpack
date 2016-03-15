Actions  => object
{
    type: '',  // required
    payload: {}
}

reducer  => function
function reducer(state=intialState, action)
{
    return newState
}

store = Redux.createStore(reducer);

subscribe =>
store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(action);










works with react

react-redux
react-router
