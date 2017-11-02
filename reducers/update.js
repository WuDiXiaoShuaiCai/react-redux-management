var initialState = {
    update:0
  }
  
  function update(state=initialState,action){
    switch (action.type){
        case "INCREASE":
        // console.log("update")
          return Object.assign({},state,{update:state.update+1});
          break;
        default:
          return state;
    }
  }
  
  export default update;