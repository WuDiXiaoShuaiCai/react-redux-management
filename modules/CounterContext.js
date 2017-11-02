import React from 'react';
import {connect } from 'react-redux';
import {increase,decrease,fetchList,addToCart}from'./../action/counter';




// 1. View (UI组件)发生变化 ，发出action
class Counter extends React.Component {

	componentWillMount(){
		// console.log(1)
		this.props.fetchList();
	}
	changePage(e){
		// console.log(e.currentTarget)
		const page  = e.currentTarget.getAttribute('data-page');
		const params = {page: parseInt(page)};
		this.props.fetchList(params);
	}
	/* addCart(event){
		const idx = event.currentTarget.getAttribute('data-idx');
		const addToCartProduct = this.props.lists.subjects[idx];
		this.props.addToCart(addToCartProduct); 
	} */
	addCart(e){
		// console.log(this.props.addToCart)
		const idx = e.currentTarget.getAttribute('data-idx');
		const addToCartProduct = this.props.lists[idx];
		// console.log(addToCartProduct)
		this.props.addToCart(addToCartProduct); 
	}

	render() {		
		const {value,value1, lists,increase,decrease,fetchList} = this.props;//从属性里找到传递过来的属性和方法
		
		/* if(!lists.subjects){
			return <li>数据加载中...</li>
		} */
		if(!lists){
			return <li>数据加载中...</li>
		}
		// console.log(lists,'------------------->data.json_lists')
		var output=[];
		var pages = 1; //计算分页数，默认是1页
		var outputPages = [];
		// pages = Math.ceil(lists.total/20); 
		pages = 3; 
		for(let i=1;i<=pages;i++){
			outputPages.push(<li key={i}><a href="javascript:void(0)" data-page={i} 
			onClick={(e) => this.changePage(e)}>{i} <span className="sr-only"></span></a></li>)
		}
		// console.log(outputPages,'outputpages',pages,'pages')
		for(let i=0;i<lists.length;i++){
			output.push(
				<div className="col-lg-4" key={i}>
					<li key={i}>{lists[i].title}</li>
					<p>
						<a className="btn btn-default" role="button">查看详情 &raquo;</a>
						&nbsp;
						<a className="btn btn-success" href="javascript:void(0)" role="button"
						data-idx={i} onClick={(e) => this.addCart(e)}>加入购物车</a>
					</p>
				</div>
			)
		}
		/* for(let i=0;i<lists.subject.length;i++){
			output.push(
				<div className="col-lg-4" key={i}>
					<img className="img-circle" src={lists.subjects[i].images.small} 
					alt="Generic placeholder image" width="140" height="140"/>
					<h2>{lists.subjects[i].title}</h2>
					<p>{lists.subjects[i].original_title}</p>
					<p>
						<a className="btn btn-default" role="button">查看详情 &raquo;</a>
						&nbsp;
						<a className="btn btn-success" href="javascript:void(0)" role="button"
						data-idx={i} onClick={(e) => this.addCart(e)}>加入购物车</a>
					</p>
				</div>
			)
		} */

		return (
			<div>
				<span>counter:{value}</span>     {/* ui组件中的所有值都从props中获取 */}
				<span>counter1:{value1}</span>     
				<ul>{output}</ul>

				<nav aria-label="...">
					<ul className="pagination">
						{outputPages}
					</ul>
				</nav>
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
	// console.log(state,'aaaaa')
  return {//mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲						染。mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
		value: state.reducer.count,
		value1: state.reducer.count1,
		lists:	state.reducer.lists
  }
}


//用connect方法生成 容器组件
const CounterContext = connect(getValue,{increase,decrease,fetchList,addToCart})(Counter);
	/* mapStateToProps和mapDispatchToProps，它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将state映射到 UI 组件的参数（props），后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。 */


export default CounterContext;
/* 
		1.首先，用户发出 Action。
		2.Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action。 Reducer 会返回新的 State 。
		3.State 一旦有变化，Store 就会调用监听函数。
		4.listener可以通过store.getState()得到当前状态。如果使用的是 React，这时可以触发重新渲染 View。
 */