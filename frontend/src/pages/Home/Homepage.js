import React, { useEffect, useReducer, useState } from 'react'
import { getAll } from '../../services/foodservice';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
const initialState = {foods:[]};
const reducer =(state,action)=>{
  switch(action.type){
    case 'FOODS_LOADED':
      return {...state,foods:action.payload};
    default:
      return state;
  }
};
export default function Homepage() {
  const [state,dispatch] =  useReducer(reducer,initialState);
  const {foods} =state;
  
  useEffect(()=>{ getAll().then((foods) => {dispatch({type:'FOODS_LOADED',payload: foods}) })
  },[])
  return (
    <>
      <Thumbnails foods={foods}/>
    </>
  )
}
