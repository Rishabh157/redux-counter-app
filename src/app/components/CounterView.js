import React from 'react';
import { useSelector } from "react-redux"

const CounterView = () => {

    const counter = useSelector(storeState => storeState.counter)

    return (
        <div>
            <h1> {counter.count} </h1>
        </div>
    )
}

export default CounterView;
