import {combineReducers, createStore} from 'redux';
import {Donors} from './donor';

export const ConfigureStore=()=>{
const store = createStore(combineReducers({
donors: Donors,
}));
return store;
}