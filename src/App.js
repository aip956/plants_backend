import AllPlants from "./pages/AllPlants";
import SinglePlant from "./pages/SinglePlant";
import Form from "./pages/Form";

// Burger from https://www.youtube.com/watch?v=GGkBwpxV7AI
// Burger imports
import Navbar from "./components/Nav/Navbar";


// Import React and Hooks
import React, { useState, useEffect, useRef } from "react";

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

  const button = {
    backgroundColor: "#0D2538",
    display: "block",
    margin: "auto",
  };


  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  // const url = "https://plantsbe.herokuapp.com/plants/";
const url = 'http://localhost:3000/plants/'
  // State to hold the list of plants
  const [plants, setPlants] = useState([]);

  // An object that represents a null plant
  const nullPlant = {
    plantname: "",
    planttype: "",
    lastWatered: "",
    lastFed: "",
    recWater: "",
    recFeed: "",
    
  };

  // Const state to hold plant to edit
  const [targetPlant, setTargetPlant] = useState(nullPlant);

//////////////
  // Functions
  //////////////

// Function to get the list of plants from API
const getPlants = async () => {

  const response = await fetch(url)
  const data = await response.json()
  setPlants(data)
  console.log(getPlants)
  console.log(data)

  };

  // Function to add plant from Form data
  const addPlants = async (newPlant) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
          })
          console.log(newPlant);

    // Get updated list of plants
    getPlants();
  };

  // Function to select plant to edit
  const getTargetPlant = (plant) => {
    setTargetPlant(plant);
    props.history.push("/edit");
  };

  // Function to edit plant on form submission
  const updatePlant = async (plant) => {
    const response = await fetch(url + plant.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    });

    // Get updated list of plants
    getPlants();
  };

  // Function to delete plant
  const deletePlant = async(plant) => {
    const response = await fetch(url + plant.id + "/", {
      method: "delete",
  });

  // Get updated list of plants
  getPlants();
  props.history.push("/");
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
// globalstyles goes in classname app div
// need to add const open, set open

  return (

    <div className="App">
   <Navbar />

  
  
      <h1 style={h1}>My Plants List</h1>

      <Link to="/new"><button style={button}>Create New Plant</button></Link>

      <Switch>
        {/* INDEX PAGE */}
        <Route 
        exact 
        path="/"
        render={(rp) => {
        return <AllPlants 
        {...rp} 
        plants={plants} />;
        
      }}
        />
        {/* SHOW PAGE */}
        <Route 
        path = "/plant/:id"
        render={(rp) => {
          return <SinglePlant 
          {...rp} 
          plants={plants} 
          edit={getTargetPlant}
          deletePlant={deletePlant}
          />;
        }}
        />
{/* NEW AND EDIT FORM PAGES */}
        <Route 
        path = "/new"
        render={(rp) => {
        return <Form {...rp}
        initialPlant={nullPlant}
        handleSubmit={addPlants}
        buttonLabel="Add a Plant!"
        />;
      }}
        />
        <Route 
        path = "/edit"
        render={(rp) => {
        return <Form 
        {...rp} 
        initialPlant={targetPlant}
        handleSubmit={updatePlant}
        buttonLabel="Edit a Plant!"
                />;
        }}
        />
      </Switch>
    </div>

// Closes the return
  ); 
// Closes the App
}

export default App;
