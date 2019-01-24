import React, {Fragment} from 'react'
import Slide from "@material-ui/core/Slide/Slide";
import Dialog from "@material-ui/core/Dialog/Dialog";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

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
                >
                    <AppBar>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.props.handleClose} aria-label="Close">
                                <CloseIcon/>
                            </IconButton>
                            <Typography variant="h6" color="inherit">
                                {this.props.img.description}
                            </Typography>
                            <Button color="inherit" onClick={this.props.handleClose}>
                                DOWNLOAD
                            </Button>
                        </Toolbar>
                    </AppBar>

                </Dialog>

            </Fragment>
        )
    }
}

export default ImageDetails