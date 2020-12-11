import React from 'react'
import LogoHeader from './header'
import SearchBar from './SearchBar'

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term)
    }

    render() {
        return (
            <div className="ui container">
                <LogoHeader />
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App
