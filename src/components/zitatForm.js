import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { getInitalState, inputZitat } from '../store/formReducer'

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
    const [zitatFields, setZitatFields] = useState([])
    const { register, handleSubmit, setValue } = useForm()

    const add = () => {
        setZitatFields([...zitatFields, {}])
    }

    const remove = (index) => {
        setZitatFields([
            ...zitatFields.slice(0, index),
            ...zitatFields.slice(index + 1),
        ])
    }

    /*    const onInputChange = () => {
        const autor = watch('author')
        const buchtitel = watch('buchtitel')

        console.log(autor, buchtitel)

        buchtitel
            ? dispatch(findBook(autor, buchtitel))
            : console.log('Ick brauche nen Titel!')
    }

 */

    useEffect(() => {
        setValue('zitate', [])
    }, [])

    const onSubmit = (data) => {
        dispatch(inputZitat(data))
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

            <ul name="hashtag">
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
