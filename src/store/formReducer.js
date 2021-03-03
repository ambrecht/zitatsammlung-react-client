import axios from 'axios'

const initalState = {
    zitat:
        'Von unsern Eigenschaften kann keine dem göttlichen Wesen zugeschrieben werden, ohne es mit ihrer Unvollkommenheit zu beflecken.',
    vorname: 'Michel',
    nachname: 'de Montaigne',
    seite: 55,
    titel: 'Tagebuch der Reise nach Italien',
    verlag: 'Eichborn Verlag',
    jahr: 2009,
    hashtag: ['#Gott', '#Theologie'],
}

// REDUCER

export function formReducer(state = initalState, action) {
    switch (action.type) {
        case ZITAT_INPUT:
            console.log(action.payload)
            return { ...state, zitate: action.payload }
        case RESPONSE_BOOK_API:
            return { ...state, book: action.payload }
        case GET_SELECT_OPTIONS:
            return { ...state, select: action.payload }

        default:
            return state
    }
}

// action types

const ZITAT_INPUT = 'zitat/input'
const RESPONSE_BOOK_API = 'zitat/bookAPI'
const GET_SELECT_OPTIONS = 'zitat/selectoptions'

// action creator
export const getInitalState = (state) => state

export const inputZitat = (zitate) => {
    return async function (dispatch) {
        try {
            const res = await axios.post('/insert', zitate)
            console.log(res)
        } catch (e) {
            console.log(e)
        }

        dispatch({ type: ZITAT_INPUT, payload: zitate })
    }
}

export const findBook = (author, titel) => {
    return async function (dispatch) {
        const aut = author.split(' ').join('+')
        const tit = titel.split(' ').join('+')
        const response = await axios.get(
            titel
                ? `http://openlibrary.org/search.json?author=${aut}&${tit}`
                : `http://openlibrary.org/search.json?author=${aut}`
        )

        dispatch({
            type: RESPONSE_BOOK_API,
            payload: response.data,
        })
    }
}

export const getSelectOptions = () => {
    return async function (dispatch) {
        const response = await axios.get()

        dispatch({
            type: RESPONSE_BOOK_API,
            payload: response.data,
        })
    }
}
