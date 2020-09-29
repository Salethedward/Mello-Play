import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MainContent from '../components/MainContent/MainContent'
import SearchBar from '../components/MainContent/SearchBar/SearchBar'
import * as actions from '../store/actions/index'

class ArtistSearch extends PureComponent {

    state = {
        userInput: ''
    }


    inputChangedHandler = (event) => {
        this.setState({ userInput: event.target.value })
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        const input = this.state.userInput
        if(input) {
            // Dispatching action
            this.props.onArtistSearch(input)

            // Pushing a new page
            this.props.history.push('/artists')
            this.setState({ userInput: '' })
        }
    }


    render() {
        return (
            <MainContent>
                <div>
                    <h1 className="display-3 text-light text-center">MeLLo PlaY</h1>
                    <SearchBar 
                        value={this.state.userInput}
                        changed={this.inputChangedHandler}
                        submitted={this.formSubmitHandler} />
                </div>
            </MainContent>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onArtistSearch: (arName) => dispatch(actions.fetchArtistsStart(arName))
    }
}

export default connect(null, mapDispatchToProps)(ArtistSearch)