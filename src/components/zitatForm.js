import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { inputZitat } from '../store/formReducer'

export default function zitatForm() {
    const dispatch = useDispatch()

    const [zitatFields, setZitatFields] = useState([])
    const { register, handleSubmit } = useForm()

    const add = () => {
        setZitatFields([...zitatFields, {}])
    }

    const remove = (index) => {
        setZitatFields([
            ...zitatFields.slice(0, index),
            ...zitatFields.slice(index + 1),
        ])
    }

    const onSubmit = (data) => {
        console.log(data)
        dispatch(inputZitat(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul name="zita">
                {zitatFields.map((item, index) => (
                    <li key={index.toString()}>
                        <textarea
                            name={`zitate.${index}.text`}
                            defaultValue="zitat"
                            ref={register}
                        />
                        <input
                            name={`zitate.${index}.seite`}
                            ref={register}
                            defaultValue="Seitenzahl"
                        />

                        <button onClick={() => remove(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <section>
                <button
                    type="button"
                    onClick={() => {
                        add()
                    }}
                >
                    Add
                </button>
            </section>
            <button type="submit">Speichern</button>
        </form>
    )
}
