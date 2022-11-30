import React from 'react';
import { useDispatch } from "react-redux"

const Inc = () => {

    const dispatch = useDispatch();

    return (
        <button onClick={() => {
            dispatch({ type: "INC" })
        }}
            className='btn btn-success me-3'
        >Inc</button>
    )
}

export default Inc;
