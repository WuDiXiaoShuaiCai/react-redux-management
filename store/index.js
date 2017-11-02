//store就是数据仓库
import {createStore,applyMiddleware} from 'redux';//中间件实现异步
import reducer from './../reducers/index';//引入合并后的reducer
import thunk from 'redux-thunk';


const store = createStore(reducer,applyMiddleware(thunk));

export default store;
  