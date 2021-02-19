import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './reducers/index'
import { findBook } from './reducers/formReducer'

import App from './components/app'

store.dispatch(function getInitalBookList(dispatch) {
    dispatch(findBook())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
