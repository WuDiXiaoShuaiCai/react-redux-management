import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store/index';
import {increase,decrease,fetchList}from'./action/counter';




// 1. View (UI组件)发生变化 ，发出action
class Counter extends React.Component {
	render() {		
		const {value,value1, lists,increase,decrease,fetchList} = this.props;//从属性里找到传递过来的属性和方法
		
		if(!lists){
			return <li>数据加载中...</li>
		}
		var output=[];
		for(let i=0;i<lists.length;i++){
			output.push(<li key={i}>{lists[i].title}</li>)
		}
		return (
			<div>
				<span>counter:{value}</span>     {/* ui组件中的所有值都从props中获取 */}
				<span>counter1:{value1}</span>     
				<ul>{output}</ul>

				<br/>

				<button onClick={increase}>计数+1</button>     {/* 将action传入2中参数 */}
				<button onClick={decrease}>计数-1</button>
				
				<button onClick={fetchList}>获取数据</button>
				
			</div>
		)
	}
}


//把状态变成属性					//4.container
const getValue = (state, ownProps) => {
  return {//mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲						染。mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
		value: state.count,
		value1: state.count1,
		lists:	state.lists
  }
}


//用connect方法生成 容器组件
const CounterContext = connect(getValue,{increase,decrease,fetchList})(Counter);
	/* mapStateToProps和mapDispatchToProps，它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props），后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。 */


ReactDOM.render(
	<Provider store={store}>
		<CounterContext />
	</Provider>,
	document.getElementById('app')
)
/* 
		1.首先，用户发出 Action。
		2.Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action。 Reducer 会返回新的 State 。
		3.State 一旦有变化，Store 就会调用监听函数。
		4.listener可以通过store.getState()得到当前状态。如果使用的是 React，这时可以触发重新渲染 View。
 */