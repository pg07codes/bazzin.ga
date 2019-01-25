
import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import fetchCurated from '../actions/fetchCurated'
import StackGrid , {transitions}from "react-stack-grid";
import CuratedImagesStySheet from '../css/CuratedImagesStySheet.css'
import Loader from '../components/Loader'
import ImageDetails from "./ImageDetails";


const { scaleDown }=transitions

class CuratedImages extends React.Component{

    state={
        isOpenDetails:false,
        ofImage:null
    }

    curatedImages;
    pageNum=1;

    componentDidUpdate(){

        this.curatedImages=this.props.imgs.map(i=>
            <img onClick={()=>this.openDetails(i)} className="USimages" id={i.id} alt={i.description} key={i.id} src={i.urls.small}/>
        )
    }

    openDetails=(imgData)=>{
        this.setState({
            ofImage:imgData,
            isOpenDetails:true
        })
    }


    closeDetails = () => {
        this.setState({
            isOpenDetails: false,
            ofImage:null
        });
    };



    render(){

        return(

            <Fragment>

                {this.state.isOpenDetails?
                    <ImageDetails img={this.state.ofImage} open={this.state.isOpenDetails} handleClose={this.closeDetails}/>
                    :null}

                <InfiniteScroll
                    pageStart={0}
                    loadMore={
                        ()=>this.props.fetchCurated(this.pageNum++)}
                    hasMore={true}
                    threshold={200}
                    loader={<Loader key={0}/>}>

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