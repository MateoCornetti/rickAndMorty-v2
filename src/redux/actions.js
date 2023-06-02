import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action_types";

export const addFav = (payload) => {
    return {
        type:ADD_FAV,
        payload,
    }
}

export const removeFav = (id) => {
    return {
        type:REMOVE_FAV,
        payload: id,
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (payload) => {
    return {
        type: ORDER,
        payload,
    }
}