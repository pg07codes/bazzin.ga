
import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import fetchCurated from '../actions/fetchCurated'

class CuratedImages extends React.Component{

    curatedImages;
    pageNum=1;

    componentDidUpdate(){

        this.curatedImages=this.props.imgs.map(i=>
            <img style={{margin:"10px"}} alt="random" src={i.urls.thumb}/>
        )
    }


    render(){

        return(

            <Fragment>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={
                        ()=>this.props.fetchCurated(this.pageNum++)}
                    hasMore={true}
                    threshold={70}
                    loader={<span>loading...</span>}>

                    {this.curatedImages}

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
        fetchCurated:(pageNum)=>dispatch(fetchCurated(pageNum))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(CuratedImages)