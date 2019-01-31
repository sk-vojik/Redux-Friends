import React, { Component } from "react";

import FriendsListView from "./views/FriendsListView";
import FormView from './views/FormView'

class App extends Component {
  render() {
    return (
      <div>
        <FriendsListView />
        <FormView />
      </div>
    )
  }
}

export default App;
