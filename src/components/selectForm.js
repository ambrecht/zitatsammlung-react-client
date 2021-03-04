import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { getSelectOptions, getOptions } from '../store/selectReducer'

export default function selectForm() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSelectOptions())
    }, [])

    const options = useSelector(getOptions).autorOpts

    const [value, setValue] = useState()

    const onChange = (option) => {
        console.log(option)
        setValue(option)
    }

    console.log({ ...{ value, onChange, options } })
    if (value) {
        return <div>AUTOR:{value.value}, </div>
    }

    return (
        <>
            <Select
                {...{ onChange, options }}
                isClearable
                isOptionDisabled={(opt) => opt.disabled}
                getOptionLabel={(opt) => opt.label}
                getOptionValue={(opt) => opt.value}
            />
        </>
    )
}
