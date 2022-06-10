import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import React from "react";
import Home from "./Component/Home";
import UserCreate from "./Component/UserCreate";
import UserList from "./Component/UserList";
import Notfount from "./Component/NotFount";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usercreate" element={<UserCreate />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="*" element={<Notfount/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}
