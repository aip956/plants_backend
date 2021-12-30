import AllPlants from "./pages/AllPlants";
import SinglePlant from "./pages/SinglePlant";
import Form from "./pages/Form";

// Import React and Hooks
import React, { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";


function App(props) {
  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  const url = "https://plantsbe.herokuapp.com/plants";

  // State to hold the list of plants
  const [plants, setPlants] = useState([]);

//////////////
  // Functions
  //////////////

// Function to get the list of plants from API
const getPlants = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setPlants(data);
  };

  //////////////
  // useEffects
  //////////////

// useEffect to get list of plants when page loads
useEffect(() => {
  getPlants();
}, []);

  /////////////////////
  // returned JSX
  /////////////////////

  return (
    <div className="App">
      <h1 style={h1}>My Plants List</h1>
      <Switch>
        <Route 
        exact 
        path="/"
        render={(rp) => <AllPlants {...rp} plants={plants} />}
        />
        <Route 
        path = "/plant/:id"
        render={(rp) => (
          <SinglePlant {...rp} plants={plants} />
        )}
        />

        <Route 
        path = "/new"
        render={(rp) => <Form {...rp} />}
        />

        <Route 
        path = "/edit"
        render={(rp) => <Form {...rp} />}
        />
      </Switch>
    </div>
  );
}

export default App;
