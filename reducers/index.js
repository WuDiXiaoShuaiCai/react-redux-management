// reducers/index.js
import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import reducer from './counter'
import update from './update'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    update,
    reducer,
    routing: routerReducer,
    form: formReducer // form键名不能变
})