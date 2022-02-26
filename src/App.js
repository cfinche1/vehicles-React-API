import React, { Component } from "react";
import { VehicleList } from './components/VehicleList';

class App extends Component {
  render() {
    return(
      <div className="whole">
        <VehicleList />
      </div>
    )
  }
}

export default App;
