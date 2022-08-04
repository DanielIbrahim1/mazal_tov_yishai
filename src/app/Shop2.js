import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getDataAsync,addDataAsync,delDataAsync,selectCart,} from './shopSlice';
// import styles from './Counter.module.css';

// fo rtest now 
export function Shop2() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getDataAsync());
  },[]);
 

  return (
    <div>
      
        {cart.length} - number of products in cart

      {cart.map((prod) => (
        <div>
          Desc: {prod.desc} {", "} Price: {prod.price}
        </div>
      ))}
    </div>
  );
}
