import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className='w-full flex justify-center h-full p-24 bg-grey3 flex-col'>
      <div className='w-min flex flex-row gap-4'>
        <button
          className='text-white bg-blue p-12'
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className='bg-white mt-2 p-6 rounded-md flex items-center5'>
          {count}
        </span>
        <button
          className='text-white bg-blue p-12'
          aria-label='Increment value'
          onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className='flex flex-col w-min my-4'>
        <input
          className='p-2'
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className='bg-blue my-2 p-4 rounded-md '
          onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button
          className='bg-blue my-2 p-4 rounded-md '
          onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
        <button
          className='bg-blue my-2 p-4 rounded-md '
          onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </div>
    </div>
  );
}
