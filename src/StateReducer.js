export const initialState={
   isLogin:JSON.parse(localStorage.getItem("isLogin")) || false,
    
}
export const stateReducer = (state,action) =>{
  switch(action.type){
    case "LOGIN" :
      return {
        ...state,
        isLogin:action.payload,
      }
  }
}