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
 * @param { Object } initState 初始数据
 * @returns {{dispatch: function, getState: function}}
 */
export function createStore(reducer, initState) {

    let listeners = [],
        currentState = initState;

    /**
     * @desc 触发action 更新数据
     * @param action
     * @returns {*}
     */
    function dispatch(action) {
        currentState = reducer(currentState, action);
        listeners.forEach((item) => { // 触发订阅事件
            item()
        });
        return action
    }

    /**
     * @desc 获取state
     * @returns {Object} currentState 最新的state
     */
    function getState() {
        return currentState;
    }

    /**
     * @desc 订阅state变化
     */
    function subscribe(listener) {
        listeners.push(listener);
        let isSubscribed = true;
        return function unsubscribe() {
            if (!isSubscribed) return; // 防止多次取消订阅
            isSubscribed = false;
            listeners.splice(listeners.indexOf(listener), 1)

        }
    }

    return {
        subscribe,
        dispatch,
        getState
    }
}






