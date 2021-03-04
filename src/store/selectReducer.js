import axios from 'axios'

// REDUCER
//The SELECT-Reducer retrieves the existing options from the database
// and formats them for the react-select component
export function selectReducer(state = {}, action) {
    switch (action.type) {
        case GET_SELECT_OPTIONS:
            return {
                ...state,
                autorOpts: [...action.payload],
            }
        case SET_SELECT_OPTIONS:
            console.log(action.payload)
            return {
                ...state,
                autorOpts: [...state.autorOpts, ...action.payload],
            }
        default:
            return state
    }
}

// action types
const GET_SELECT_OPTIONS = 'select/getoptions'
const SET_SELECT_OPTIONS = 'select/setoptions'

//selectors
export const getOptions = (state) => state.selectOptions

// action creators

export const getSelectOptions = () => {
    return async function (dispatch) {
        const response = await axios.get('/select')
        const options = []

        response.data.map((autor) =>
            options.push({
                value: autor.id,
                label: autor.vorname + ' ' + autor.nachname,
            })
        )

        dispatch({ type: GET_SELECT_OPTIONS, payload: options })
    }
}

export const setSelectOptions = (autor) => {
    return async function (dispatch) {
        const current = {
            value: autor.vorname + ' ' + autor.nachname,
            label: autor.vorname + ' ' + autor.nachname,
        }
        console.log(current)
        dispatch({ type: SET_SELECT_OPTIONS, payload: [current] })
    }
}
