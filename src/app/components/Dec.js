import React from 'react';
import { useDispatch } from "react-redux"

const Dec = () => {

    const dispatch = useDispatch();

    return (
        <button
            onClick={() => {
                dispatch({ type: "DEC" })
            }}
            className='btn btn-dark ms-3'
        >
            Dec</button>
    )
}

export default Dec;
