import { createStore, combineReducers } from '../src/index.js'

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

let testSubscribe = store.subscribe(() => {
    console.log('isSubscribe')
});
let testSubscribe2 = store.subscribe(() => {
    console.log('isSubscribe2')
});

store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs'
});
console.log(store.getState());
testSubscribe();
testSubscribe2();
store.dispatch({
    type: 'ADD_TODO_NUM',
    num: 1
});

console.log(store.getState());