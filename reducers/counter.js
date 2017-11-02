//2. reducer （纯函数，{因作为store中的参数}将自动执行state更新，并返回新的state）
var _ = require('lodash');
var initialState = {
    count: 0,
    count1: 0,
    lists: {},
    carts: []
}

function reducer(state = initialState, action) {//state默认值：count:0
	switch(action.type) {
		//不能对值进行直接的修改 ，纯函数的概念
		case "INCREASE":
		// return {count: state.count + 1};
			return Object.assign({}, state, { count: state.count + 1 });
			break;
		case "DECREASE":
		// return {count1: state.count1 - 1};
			return Object.assign({}, state, { count1: state.count1 - 1 });
			break;
		case "GETLISTS":
			return Object.assign({}, state, { lists: action.data })//action有两个内容，一个是type，一个是payload(data)
			break;
		case "ADDTOCART":
            /*
              先检查state.carts中是否存在action.data.id的这个对象
              如果不存在
                那么quantity购买数量为1
              如果存在
                那么先取出之前对象中的quantity，然后再在那个基础上+1
              然后再进行对象的合并操作
             */
            var pos = _.findIndex(state.carts, { 'id': action.data.id });
            if (pos === -1) {
                action.data.quantity = 1;
            } else {
                action.data.quantity = state.carts[pos].quantity + 1
            }
            return {
                ...state,//将所有state中的值都加进来
                carts: [...state.carts, action.data]//将action.data加入到carts中
            }
            break;
		default:
            return state;
	}
}

export default reducer;