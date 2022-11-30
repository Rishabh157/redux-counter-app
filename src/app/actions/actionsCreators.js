import { DECREMENT_COUNT, INCREMENT_COUNT } from "./actionTypes";

export const Increment = (count) => {
    return {
        type: INCREMENT_COUNT,
        payload: count,
    }
}

export const Decrement = (count) => {
    return {
        type : DECREMENT_COUNT,
        payload : count,
    }
}