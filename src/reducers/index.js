import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { formReducer } from './formReducer'
import { zitatReducer } from './zitatReducer'
import thunk from 'redux-thunk'

const composeEnhancers =
    (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
)
export const store = createStore(
    combineReducers({
        form: formReducer,
        zitat: zitatReducer,
    }),
    enhancer
)

/* export const store = createStore(
    combineReducers({
        form: formReducer,
        zitat: zitatReducer,
    }),
    applyMiddleware(thunk)
) */
