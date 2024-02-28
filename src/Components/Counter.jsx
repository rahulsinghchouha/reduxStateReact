import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {
    const count=useSelector((state)=>state.counter.value);

    const distpatch=useDispatch();

  return (
    <div>
      <button
      onClick={()=>distpatch(increment())}>Increment</button>
      <br/>
      <br/>
      <br/>
      <div>{count}</div>
      <br/>
      <br/>
      <button
       onClick={()=>distpatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
