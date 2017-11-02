export const increase = ()=>{
    return {
      type:"INCREASE"
    }
}
export const decrease = ()=>{
    return {
      type:"DECREASE"
    }
}
export const getListData=(data)=>{
  return {
    type:"GETLISTS",
    data   //data:data
  }
}
export const addToCartFunc=(data)=>{
  console.log('data:',data)
  return {
    type:'ADDTOCART',
    data
  }
}

export function addToCart(params){
  return dispatch=>{
    dispatch(addToCartFunc(params))
  }
}

export function fetchList(params={page:1}){
  return dispatch=>{//分发操作
    // console.log(params)   
    var url=`data.json`; 
    // var url='../data.json';
    // var url = 'api/v2/movie/top250';
    // var url='http://localhost:3000/posts';
    // var start  = 20*(params.page-1);
    // var url=`api/v2/movie/top250?start=${start}`;
    return fetch(url)//该方法包含在redux.thunk中
    .then(res=>{
      return res.json()
    })
    .then((data) => {
      // console.log(data)
        dispatch(getListData(data))
    })
  }
}