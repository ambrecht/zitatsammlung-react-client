import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { getInitalState } from '../store/formReducer'
import { setSelectOptions } from '../store/selectReducer'

export default function zitatForm() {
    const dispatch = useDispatch()

    const initalSate = useSelector(getInitalState)
    const {
        vorname,
        nachname,
        hashtag,
        titel,
        verlag,
        jahr,
    } = initalSate.formInput

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        dispatch(setSelectOptions(data.author))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                defaultValue={vorname}
                name="author.vorname"
                ref={register}
            />

            <input
                type="text"
                defaultValue={nachname}
                name="author.nachname"
                ref={register}
            />

            <input
                type="date"
                defaultValue="Geburt"
                name="author.geburt"
                ref={register}
            />

            <input
                type="date"
                defaultValue="Tot"
                name="author.tot"
                ref={register}
            />
            <input
                type="text"
                defaultValue={titel}
                name="buchtitel"
                ref={register}
            />

            <input
                type="text"
                defaultValue={verlag}
                name="publisher"
                ref={register}
            />
            <input
                type="text"
                defaultValue="20009"
                placeholder={jahr}
                name="year"
                ref={register}
            />
            <input
                type="text"
                defaultValue={hashtag}
                name="hashtag[0]"
                ref={register}
            />

            <button type="submit">Autor und Buch speichern...</button>
        </form>
    )
}
