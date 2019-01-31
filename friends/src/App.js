import React, { Component } from "react";

import FriendsListView from "./views/FriendsListView";
import FormView from './views/FormView'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <FriendsListView />
        <FormView />
      </div>
    )
  }
}

export default App;
