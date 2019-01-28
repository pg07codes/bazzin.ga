
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
    pageNumber=1;

    componentDidUpdate(){

        this.curatedImages=[]// empytying the old images

        this.curatedImages=this.props.imgs.map(i=>
            <div className="box" id={i.id} key={i.id}>
                <img src={i.urls.small} alt={i.description} className="USimages"/>
                    <div className="box-content">
                        <div className="content">
                            <img src={i.user.profile_image.medium} alt={i.user.name} style={{borderRadius:"50%"}}/>
                            <h6 style={{paddingTop:"5px",color:"#009670"}}>{i.user.name}</h6>
                        </div>
                        <ul className="icon">
                            <li  style={{cursor:"pointer", fontSize:"1.5em"}} onClick={()=>this.openDetails(i)} >
                                <i style={{color:"#009670"}}
                                   className="fas fa-search-plus"/></li>
                        </ul>
                    </div>
            </div>
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
                        ()=>this.props.fetchCurated(this.pageNumber++)}
                    hasMore={true}
                    threshold={200}
                    loader={<Loader key={0}/>}>

                    <StackGrid
                        columnWidth={420}
                        appear={scaleDown.appear}
                        appeared={scaleDown.appeared}
                        enter={scaleDown.enter}
                        entered={scaleDown.entered}
                        leaved={scaleDown.leaved}
                        monitorImagesLoaded={true}>

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
        fetchCurated:(pageNumber)=>dispatch(fetchCurated(pageNumber))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(CuratedImages)