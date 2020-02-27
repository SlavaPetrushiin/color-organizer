import stateData from '../data/initialState.json';

const ADD_COLOR = 'ADD_COLOR';
const REMOVE_COLOR = 'REMOVE_COLOR';
const RATE_COLOR = 'RATE_COLOR';
const SORT_COLOR = 'SORT_COLOR';

const initialState = stateData;

const reducerColors = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLOR :
            return {
                ...state,
                colors : [...state.colors, action.color]
            };
        case REMOVE_COLOR :
            return {
                ...state,
                colors: state.colors.filter(color => color.id !== action.id)
            };
        case RATE_COLOR :
            return {
                ...state,
                colors: state.colors.map(color => {
                    if(color.id === action.id){
                        return {...color, rating :action.rating}
                    }
                    return color
                })
            };
        default :
            return state;
    }
};

export const addColor = (color) => ({type : ADD_COLOR, color});
export const removeColor = (id) => ({type : REMOVE_COLOR, id});
export const rateColor = (id, rating) => ({type : RATE_COLOR, id, rating});
export const sortColor = (word) => ({type : SORT_COLOR, word});

export default reducerColors;