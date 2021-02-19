import React from 'react'
import { Autocomplete } from '@material-ui/lab'
import { useSelector } from 'react-redux'
import { getBookList } from '../reducers/formReducer'

const books = useSelector(getBookList)

export function auto() {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={books}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => (
                <input {...params} label="Combo box" variant="outlined" />
            )}
        />
    )
}
