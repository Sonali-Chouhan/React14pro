import React from "react";
import {CgDanger} from "react-icons/cg"

export default class Notfount extends React.Component{
    render(){
        return(
            <div className="error">
                <h1><CgDanger/>404-Error</h1>
                <p>Page-Not-Found</p>
            </div>
        )
    }
}