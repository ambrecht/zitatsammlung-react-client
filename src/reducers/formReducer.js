import axios from 'axios'

const initalState = {
    zitat: {
        body:
            'Von unsern Eigenschaften kann keine dem göttlichen Wesen zugeschrieben werden, ohne es mit ihrer Unvollkommenheit zu beflecken.',
        autor: 'Michel de Montaigne',
        seite: 55,
        buch: {
            titel: 'Tagebuch der Reise nach Italien',
            verlag: 'Eichborn Verlag',
            jahr: 2009,
        },
        hashtag: ['#Gott', '#Theologie'],
        user: {
            name: 'betonhead',
            email: 'bier@wurst.de',
        },
    },
}

export function formReducer(state = initalState, action) {
    switch (action.type) {
        case ZITAT_INPUT:
            return { ...state, zitat: action.payload }
        case RESPONSE_BOOK_API:
            console.log(action.payload)
            return { ...state, book: action.payload }

        default:
            return state
    }
}

// action types
export const ZITAT_INPUT = 'zitat/input'
export const RESPONSE_BOOK_API = 'zitat/bookAPI'

export const getBookList = (state) => state.book

// action creators
export const inputZitat = (zitat) => ({
    type: ZITAT_INPUT,
    payload: zitat,
})

export const findBook = (data) => {
    return async function (dispatch) {
        const response = await axios.get(
            'https://openlibrary.org/search.json?q=author:Paul Häberlin&mode=everything'
        )
        console.log(data)

        dispatch({
            type: RESPONSE_BOOK_API,
            payload: response.data,
        })
    }
}
