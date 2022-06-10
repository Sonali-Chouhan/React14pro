import React from "react";
import { Link } from "react-router-dom";
export default class Header extends React.Component{
    render(){
        return (
            <div>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/usercreate">Create</Link>
                <Link to="userlist">List</Link>
              </nav>
            </div>
          );
    }
}