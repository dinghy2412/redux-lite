/**
 * @desc 合成reducers
 * @param { Object } reducers
 * @returns {function(*, *=)}
 */
export function combineReducers(reducers) {
    return function reducer(state, action) {
        let nextState = {};
        for(let i in reducers) {
            nextState[i] = reducers[i](state[i], action);
        }
        return nextState
    }
}

/**
 * @desc 创建store
 * @param { Function } reducer
 * @param { Object } initState
 * @returns {{dispatch: function, getState: function}}
 */
export function createStore(reducer, initState) {

    /**
     * @desc 触发action 更新数据
     * @param action
     * @returns {*}
     */
    function dispatch(action) {
        initState = reducer(initState, action);
        return action
    }

    /**
     * @desc 获取state
     * @returns {Object} currentState 最新的state
     */
    function getState() {
        return initState;
    }

    return {
        // subscribe,
        dispatch,
        getState
    }
}






