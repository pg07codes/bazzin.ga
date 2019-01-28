import React, {Fragment} from 'react'
import Slide from "@material-ui/core/Slide/Slide";
import Dialog from "@material-ui/core/Dialog/Dialog";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography/Typography";
import ToolTip from '@material-ui/core/Tooltip'

function Transition(props) {
    return <Slide direction="left" {...props} />;
}


class ImageDetails extends React.Component{

    render(){

        return(

            <Fragment>

                <Dialog
                    fullScreen
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    TransitionComponent={Transition}
                    PaperProps={{
                        style: {
                            backgroundColor: '#2e3035'
                        },
                    }}
                >
                    <AppBar
                        style={{backgroundColor:"#2e3035"}}
                    >

                        <Toolbar>

                            <IconButton>
                                <i  style={{color:"red"}} className="fas fa-heart"/>
                            </IconButton>

                            <IconButton>
                                <a target="_blank" rel="noopener noreferrer" href={this.props.img.links.download}>
                                    <i style={{color:"#009670"}} className="fas fa-download"/>
                                </a>
                            </IconButton>

                            <Typography variant="h5" style={{flex:1,textAlign:"center", color:"#009670"}}>
                                {this.props.img.description}
                            </Typography>

                            <IconButton color="inherit" onClick={this.props.handleClose} aria-label="Close">
                                <CloseIcon/>
                            </IconButton>

                        </Toolbar>
                    </AppBar>

                    <div style={{width:"100%", textAlign:"center"}}>
                        <img style={{maxWidth:"100%",marginTop:"10vh",marginBottom:"5vh"}} alt={this.props.img.description} src={this.props.img.urls.regular}/>
                    </div>

                    <div className="jumbotron jumbotron-fluid" style={{margin:0}}>
                        <div style={{marginLeft:"2vh"}}>

                            <h2 style={{padding:"8px",borderBottom:"8px black double",color:"#009670"}} className="display4">About the photographer</h2>
                            <img style={{borderRadius:"50%"}} src={this.props.img.user.profile_image.large} alt={this.props.img.user.name}/>
                            <span style={{fontSize:"2em", margin:"5vh"}}>{this.props.img.user.name}</span>

                            {this.props.img.user.bio?
                                (<h5 style={{margin:"4vh 2vh"}}><strong>STATUS :</strong>  {this.props.img.user.bio}</h5>):
                                null}

                            <hr className="my-4"/>

                                {/*Social media handles*/}

                            <div style={{float:"right", margin:"2vh"}}>


                                {this.props.img.user.links.html?
                                    <ToolTip title="unsplash" aria-label="unsplash">
                                        <a target="_blank" rel="noopener noreferrer" style={{padding:"3vh 3vh"}}
                                           href={this.props.img.user.links.html}>
                                            <i className="fas fa-3x fa-camera-retro"/>
                                        </a>
                                    </ToolTip>
                                    :
                                    null}


                                {this.props.img.user.instagram_username?
                                    <ToolTip title="instagram" aria-label="instagram">
                                        <a target="_blank" rel="noopener noreferrer" style={{padding:"3vh 3vh"}}
                                           href={"https://instagram.com/"+this.props.img.user.instagram_username}>
                                            <i className="fab fa-3x fa-instagram"/>
                                        </a>
                                    </ToolTip>
                                    :
                                    null}

                                {this.props.img.user.portfolio_url?
                                    <ToolTip title="portfolio" aria-label="portfolio">
                                        <a target="_blank" rel="noopener noreferrer" style={{padding:"3vh 3vh"}} href={this.props.img.user.portfolio_url}>
                                            <i className="fas fa-3x fa-portrait"/>
                                        </a>
                                    </ToolTip>
                                    :
                                    null}

                                {this.props.img.user.twitter_username?
                                    <ToolTip title="twitter" aria-label="twitter">
                                        <a target="_blank" rel="noopener noreferrer"  style={{padding:"3vh 3vh"}} href={"https://twitter.com/"+this.props.img.user.twitter_username}>
                                            <i className="fab fa-3x fa-twitter-square"/>
                                        </a>
                                    </ToolTip>
                                    :
                                    null}



                            </div>

                        </div>
                    </div>

                </Dialog>

            </Fragment>
        )
    }
}

export default ImageDetails