import React, {Fragment} from 'react'
import Loader from "react-md-spinner";

let LoaderStyles={
    margin:"10vh auto",
    width:"80px",
}

export default props => {
    return (
        <div style={LoaderStyles}>
            <Loader size={56}/>
        </div>
    )
}