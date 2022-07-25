import { combineReducers, compose, createStore ,applyMiddleware} from "redux";
import { Reducer } from "./Reducer";
import thunk from "redux-thunk";


const AllReducer = combineReducers({
    State :Reducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(AllReducer,
      composeEnhancers(applyMiddleware(thunk)))

     