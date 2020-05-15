
const func1 = ({ dispatch, getState }) => (next) => {
    console.log('1', next)
    return (action) => {
        console.log('func1', action)
        next(action)
    }
}
const func2 = ({ dispatch, getState }) => (next) => {
    console.log('2', next)
    return (action) => {
        console.log('func2', action)
        next(action)
    }
}
const func3 = ({ dispatch, getState }) => (next) => {
    console.log('3', next.toString())
    return (action) => {
        console.log('func3', action)
        next(action)
        console.log(typeof next)
    }
}


let middlewares = [func1, func2, func3];
const dispatch = 'dispatch';
const getState = 'getState';

middlewares = middlewares.map((item) => item({dispatch, getState}))

function componse(funcs) {
    return  funcs.reduce((func1, func2) => {
        return (...arg) => {
            console.log('arg', ...arg);
            return func1(func2(...arg))
        }
    })
}

componse(middlewares)(function(res) {
    console.log('res', res)})({a: 1});





