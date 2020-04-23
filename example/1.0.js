
const initState = {
    arr: ['Use Redux'],
    num: 0
};

function todos(state = initState.arr, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text]);
        default:
            return state
    }
}

function todoNum(state = initState.num, action) {
    switch (action.type) {
        case 'ADD_TODO_NUM':
            return state + action.num;
        default:
            return state
    }
}

let store = createStore(combineReducers({
    arr: todos,
    num: todoNum
}, initState), ['Use Redux']);

store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs'
});
console.log(store.getState());

store.dispatch({
    type: 'ADD_TODO_NUM',
    num: 1
});

console.log(store.getState());