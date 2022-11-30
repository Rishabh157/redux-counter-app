import React from 'react';
import { useDispatch } from "react-redux"
import { Increment } from '../actions/actionsCreators';

const Inc = () => {

    const dispatch = useDispatch();

    return (
        <button onClick={() => {
            dispatch(Increment())
        }}
            className='btn btn-success me-3'
        >Inc</button>
    )
}

export default Inc;
