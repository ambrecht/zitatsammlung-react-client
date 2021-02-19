import React from 'react'
import { useForm } from 'react-hook-form'
import { inputZitat, findBook } from '../reducers/formReducer'
import { useDispatch } from 'react-redux'

export default function App() {
    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = (data) => dispatch(inputZitat(data))
    const onChange = (data) => {
        dispatch(findBook(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>

            {/* use aria-invalid to indicate field contain error */}
            <input
                type="text"
                id="name"
                name="name"
                aria-invalid={errors.name ? 'true' : 'false'}
                ref={register({ required: true, maxLength: 30 })}
                onChange={onChange}
            />
            <datalist id="huge_list"></datalist>

            {/* use role="alert" to announce the error message */}
            {errors.name && errors.name.type === 'required' && (
                <span role="alert">This is required</span>
            )}
            {errors.name && errors.name.type === 'maxLength' && (
                <span role="alert">Max length exceeded</span>
            )}

            <input type="submit" />
        </form>
    )
}
