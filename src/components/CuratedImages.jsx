
import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import fetchCurated from '../actions/fetchCurated'

class CuratedImages extends React.Component{

    items;

    componentDidMount(){

        console.log("mounted");
        this.items=this.props.imgs.map(i=>
            <img alt="random" src={i.urls.regular}/>
        )
    }

    render(){
        return(

            <Fragment>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={fetchCurated}
                    hasMore={true}
                    loader={<span>loading...</span>}>
                    {this.items}
                    {/*<h1>wip</h1>*/}
                </InfiniteScroll>

            </Fragment>
        )
    }
}

let mapStateToProps=(state)=>{

    // console.log("yeh",state)
    // console.log("yeh bhee",state.cImg)

    return({
        imgs:state.cImg.curatedImages
    })
}

// MAP DISPATCH TO PROPS SHOULD BE HERE I GUESS. CHECK THIS OUT..

export default connect(mapStateToProps)(CuratedImages)