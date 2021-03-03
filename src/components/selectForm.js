import React, { useEffect } from 'react'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getSelectOptions, getOptions } from '../store/selectReducer'

export default function selectForm() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSelectOptions())
    }, [])

    const options = useSelector(getOptions)

    const { control, handleSubmit } = useForm()

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="autor"
                as={Select}
                options={options.autorOpts}
                control={control}
                defaultValue="Autor"
            />

            <button type="submit">Suche</button>
        </form>
    )
}
