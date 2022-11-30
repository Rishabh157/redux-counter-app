import React from 'react';
import { useDispatch } from "react-redux"
import { Decrement } from '../actions/actionsCreators';

const Dec = () => {

    const dispatch = useDispatch();

    return (
        <button
            onClick={() => {
                dispatch(Decrement())
            }}
            className='btn btn-dark ms-3'
        >
            Dec</button>
    )
}

export default Dec;
