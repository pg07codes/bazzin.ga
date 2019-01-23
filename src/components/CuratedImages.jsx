
import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import fetchCurated from '../actions/fetchCurated'
import StackGrid , {transitions}from "react-stack-grid";
import CuratedImagesStySheet from '../css/CuratedImagesStySheet.css'
import Loader from '../components/Loader'

const { scaleDown }=transitions


class CuratedImages extends React.Component{

    curatedImages;
    pageNum=1;

    componentDidUpdate(){

        this.curatedImages=this.props.imgs.map(i=>
            <img className="USimages" id={i.id} alt={i.description} key={i.id} src={i.urls.small}/>
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
                    threshold={50}
                    loader={<Loader/>}>

                    <StackGrid
                        columnWidth={420}
                        appear={scaleDown.appear}
                        appeared={scaleDown.appeared}
                        enter={scaleDown.enter}
                        entered={scaleDown.entered}
                        leaved={scaleDown.leaved}>
                        {this.curatedImages}
                    </StackGrid>


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