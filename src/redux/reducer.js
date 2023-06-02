import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action_types"

const initialState = {
    myFavorites:[],
    allCharacters:[]
}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state, myFavorites:[...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case FILTER:
            const filtered = state.allCharacters.filter
                (char => char.gender === action.payload)
            return {
                ...state,
                myFavorites: action.payload === "All" ? state.allCharacters:filtered,
            }
        case ORDER:
            const orderChar = state.myFavorites.sort
                ((a, b) => {
                    if (action.payload === 'A') {
                        return a.id - b.id;
                    } else {
                        return b.id - a.id;
                    }
                })
            return {
                ...state,
                myFavorites:[...orderChar],
            }
        case REMOVE_FAV:
            return {
                ...state, myFavorites:state.myFavorites.
                filter(char => char.id !== action.payload)
            }
        default:
            return {...state}
    }
}

export default rootReducer