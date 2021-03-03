import axios from 'axios'

// REDUCER
export function selectReducer(state = {}, action) {
    switch (action.type) {
        case GET_SELECT_OPTIONS:
            console.log(action.payload)

            return {
                ...state,
                autorOpts: [...action.payload],
            }

        default:
            return state
    }
}

//selectors
export const getOptions = (state) => state.selectOptions

// action types
const GET_SELECT_OPTIONS = 'select/options'

// action creators

export const getSelectOptions = () => {
    return async function (dispatch) {
        const response = await axios.get('/select')
        const options = []

        response.data.map((autor) =>
            options.push({
                value: autor.vorname + ' ' + autor.nachname,
                label: autor.vorname + ' ' + autor.nachname,
            })
        )

        /*      const allauthors = response.data.reduce(function (
            accumulator,
            currentValue
        ) {
            return [
                ...accumulator,
                currentValue.vorname + ' ' + currentValue.nachname,
            ]
        }, 
        [])*/

        dispatch({ type: GET_SELECT_OPTIONS, payload: options })
    }
}
