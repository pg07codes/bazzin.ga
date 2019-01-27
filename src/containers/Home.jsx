import React, {Fragment, Component} from 'react'
import CuratedImages from "../components/CuratedImages";
import SearchResults from "../components/SearchResults"

class Home extends Component {

    state={
        userSearching:false,
        showResults:false
    }

    setUserSearching=(val)=>{
        this.setState({userSearching:val})
    }
    setShowResults=(val)=>{
        this.setState({showResults:val})
    }

    render() {
        return (
            <Fragment>

                <SearchResults userSearching={this.setUserSearching} toShowResults={this.setShowResults} showResults={this.state.showResults}/>
                {this.state.userSearching?null:<CuratedImages/>}

            </Fragment>
        )
    }
}



export default Home
