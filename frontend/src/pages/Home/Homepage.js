import React from 'react'
const initialState = {foods:[]};
const reducer =(state,action)=>{
  switch(action.type){
    case 'FOODS_LOADED':
      return {...state,foods:action.paylaod};
    default:
      return state;
  }
};
export default function Homepage() {
  return (
    <div>
      Homepage
    </div>
  )
}
