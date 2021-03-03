import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getSelectOptions, getOptions } from '../store/selectReducer'

export default function selectForm() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSelectOptions())
    }, [])

    const [value, setValue] = useState()

    const onChange = (option) => {
        setValue(option)
        console.log(value)
    }

    const options = useSelector(getOptions)

    const { control, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
    }

    /*   const handleBotChange = (selectedBot) => {
        console.log(selectedBot)
    } */

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            onChange={handleSubmit(onSubmit)}
        >
            <Controller
                name="autor"
                as={
                    <Select
                        {...{ value, onChange, options }}
                        isClearable
                        getOptionLabel={(opt) => opt.label}
                        getOptionValue={(opt) => opt.value}
                    />
                }
                control={control}
            />
            <button type="submit">Suche</button>
        </form>
    )
}
