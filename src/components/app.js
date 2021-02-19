import React from 'react'
import LogoHeader from './logoHeader'
import SearchBar from './searchBar'
import Zitatform from './zitatForm'
import Autocomplete from './autoComplete'

const App = () => {
    return (
        <div className="ui container">
            <LogoHeader />
            <Autocomplete />
            <SearchBar />
            <Zitatform />
        </div>
    )
}

export default App
