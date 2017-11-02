import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store from './store/index';
// import { syncHistoryWithStore } from 'react-router-redux' 
// const history = syncHistoryWithStore(hashHistory, store)

import App from './modules/App';   
import About from './modules/About';   
import Home from './modules/Home';   
import CounterContext from './modules/CounterContext';   
import CartsContext from './modules/CartsContext';



ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				 <IndexRoute component={Home}/>
				 <Route path="about" component={About}/>
				 <Route path="counter" component={CounterContext}/>
				 <Route path="carts" component={CartsContext}/>
			</Route>
		</Router>
		{/* <DevTools/> */}
	</Provider>
	,document.getElementById('app')
)
	
