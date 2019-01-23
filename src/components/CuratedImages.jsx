
import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import fetchCurated from '../actions/fetchCurated'

class CuratedImages extends React.Component{

    items;

    componentDidMount(){

        console.log("mount again",this.props.imgs)

        this.items=this.props.imgs.map(i=>
            <img width="300px" alt="random" src={i.urls.thumb}/>
        )
    }

    componentDidUpdate(){

        console.log("update triggered again",this.props.imgs)

        this.items=this.props.imgs.map(i=>
            <img width="300px" alt="random" src={i.urls.regular}/>
        )
    }

    x=2;

    render(){

        return(

            <Fragment>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.props.fetchCurated}
                    hasMore={this.x--}
                    loader={<span>loading...</span>}>
                    {this.items}
                    {/*<h1>wip</h1>*/}
                </InfiniteScroll>

            </Fragment>
        )
    }
}

let mapStateToProps=(state)=>{

    return({
        imgs:state.cImg.curatedImages
    })
}

let mapDispatchToProps=(dispatch)=>{

    return({
        fetchCurated:()=>dispatch(fetchCurated())
    })
}

// MAP DISPATCH TO PROPS SHOULD BE HERE I GUESS. CHECK THIS OUT..

export default connect(mapStateToProps,mapDispatchToProps)(CuratedImages)