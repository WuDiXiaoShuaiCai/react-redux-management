import React,{Component} from 'react';
import { connect } from 'react-redux';
var _ = require('lodash');

class Carts extends Component{
	render(){
    const {carts} = this.props;
    // console.log(carts)
    var cartsList = _.uniqWith(carts, _.isEqual)//去掉重复值，返回唯一值
		var output = [];
    for(let i=0;i<cartsList.length;i++){
      output.push(<li key={i}>{cartsList[i].title} 数量：{cartsList[i].quantity}</li>)      
    }
    return (
      <div>
        Carts
        <ul>
          {output}
        </ul>
      </div>
    )
	}
}

const getValue =state=>{
  // console.log(state.carts,'<----------state.carts')
	return {
		carts: state.reducer.carts
  }
}

const CartsContext = connect(getValue)(Carts);
module.exports = CartsContext;