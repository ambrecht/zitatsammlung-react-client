import React, { useState } from 'react'
import LogoHeader from './logoHeader'
import Zitatform from './zitatForm'
import SelectForm from './selectForm'
import AddAuthorForm from './addAuthorForm'

const App = () => {
    const [display, setdisplay] = useState(false)

    if (display) {
        return <AddAuthorForm />
    }
    return (
        <div className="ui container">
            <LogoHeader />
            <button
                type="button"
                onClick={() => {
                    setdisplay(!display)
                }}
            >
                Autor und Buch hinzufügen
            </button>

            <SelectForm />
            <Zitatform />
        </div>
    )
}

export default App
