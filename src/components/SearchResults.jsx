import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import fetchSearch from "../actions/fetchSearch";
import ImageDetails from "./ImageDetails";
//import InfiniteScroll from "react-infinite-scroller";
//import Loader from "./Loader";
import StackGrid, {transitions} from "react-stack-grid";



const { scaleDown }=transitions


class SearchResults extends React.Component{

    state={
        searchQuery:"",
        isOpenDetails:false,
        ofImage:null,
    }

    searchedImages;
    pageNum=1;

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        },()=>{
            if(this.state.searchQuery!==""){
                this.props.userSearching(true)
                this.props.toShowResults(true)
            }else{
                this.props.userSearching(false)
                this.props.toShowResults(false)
                this.searchedImages=[]// emptying the old search results
            }
        })
    }

    handleSearch=(e)=>{
        e.preventDefault()
        if(this.state.searchQuery!==""){
            this.props.fetchSearch(this.state.searchQuery,this.pageNum++)
        }
    }

    componentDidUpdate(){

        this.searchedImages=this.props.searchResults.map(i=>
            <div className="box" id={i.id} key={i.id}>
                <img src={i.urls.small} alt={i.description} className="USimages"/>
                <div className="box-content">
                    <div className="content">
                        <img src={i.user.profile_image.medium} alt={i.user.name} style={{borderRadius:"50%"}}/>
                        <h6 style={{paddingTop:"5px",color:"#009670"}}>{i.user.name}</h6>
                    </div>
                    <ul className="icon">
                        <li  style={{cursor:"pointer", fontSize:"1.5em"}} onClick={()=>this.openDetails(i)} >
                            <i style={{color:"#009670"}} className="fas fa-search-plus"/></li>
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
        return (
            <Fragment>

                <form className="container searchBox mt-3">
                    <div className="row justify-content-center">
                        <div className="form-group col-md-8 col-sm-11">
                            <input onChange={this.handleChange} type="text" id="searchQuery" className="form-control " placeholder="Search" aria-label="Search"/>
                        </div>
                        <div className="form-group col-md-2 col-sm-1" >
                            <button onClick={this.handleSearch} className="btn btn-outline-success">Submit</button>

                        </div>
                    </div>
                </form>



                {this.state.isOpenDetails?
                    <ImageDetails img={this.state.ofImage} open={this.state.isOpenDetails} handleClose={this.closeDetails}/>
                    :null}

                {/*<InfiniteScroll*/}
                    {/*pageStart={0}*/}
                    {/*loadMore={*/}
                        {/*()=>this.props.fetchSearch(this.state.searchQuery,this.pageNum++)}*/}
                    {/*hasMore={this.props.isSearching&&(!this.props.isLoading)}*/}
                    {/*threshold={150}>*/}
                {this.props.showResults?
                    <StackGrid
                        columnWidth={420}
                        appear={scaleDown.appear}
                        appeared={scaleDown.appeared}
                        enter={scaleDown.enter}
                        entered={scaleDown.entered}
                        leaved={scaleDown.leaved}
                        monitorImagesLoaded={true}>

                        {this.searchedImages}

                    </StackGrid>:null}



                {/*</InfiniteScroll>*/}


            </Fragment>
        )
    }

}

let mapStateToProps=(state,ownProps)=>{

    return({
        searchResults:state.sImg.searchResults,
        isLoading: state.sImg.isLoading,
        isSearching: state.sImg.isSearching,
        userSearching:ownProps.userSearching,
        toShowResults:ownProps.toShowResults,
        showResults:ownProps.showResults
    })
}

let mapDispatchToProps=(dispatch)=>{

    return({
        fetchSearch:(s,p)=>{
            dispatch({type:"SEARCH_IS_LOADING",isLoading:true,isSearching:true})
            dispatch(fetchSearch(s,p))

        }
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResults)