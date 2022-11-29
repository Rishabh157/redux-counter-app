import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';


export default function Counter() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    console.log(count)

    return (
        <div className='container-fluid'>

            <div className='row'>

                <div className='col-md-5 text-end'>
                    <button onClick={() => dispatch(increment())}
                        className='btn btn-success mt-4'>INCREMENT</button>
                </div>


                <div className='col-md-1 text-center'>
                    <p className='display-1'>{count}</p>
                </div>


                <div onClick={() => dispatch(decrement())}
                    className='col-md-6 text-start'>
                    <button className='btn btn-dark mt-4'>DECREMENT</button>
                </div>


            </div>

        </div>
    )
}
