import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_FAV} from "./action_types";
const axios = require('axios');

const URL = 'localhost:3001/rickandmorty/'

export const addFav = (payload) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(`${URL}/fav`, payload)
            return dispatch({
                type:ADD_FAV,
                payload: data,
            });
        } catch (error) {

        }
    }
}

export const removeFav = (id) => {  
    return async function (dispatch) {
        try {
            const {data} = await axios.delete(`${URL}/fav/${id}`)
        return dispatch({
            type:REMOVE_FAV,
            payload: data,
        });
        } catch (error) {

        }
        
    }
}

export const getFav = () => {
    return async function (dispatch) {
        try {
            const {data} = await axios(`${URL}/fav`)
            return dispatch({
                type:GET_FAV,
                payload: data,
            })
        } catch (error) {;
        }
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