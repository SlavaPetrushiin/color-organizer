import {combineReducers, createStore} from 'redux';
import reducerColors from "./reducer";


const rootReducer = combineReducers({
    data : reducerColors
})

const store = createStore(rootReducer);

export default store;