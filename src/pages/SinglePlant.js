import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button-style";


// Destructuring the props needed to get our plant, including router prop match


const SinglePlant = ({ plants, match, edit, deletePlant }) => {
  const id = parseInt(match.params.id);
  const plant = plants.find((plant) => plant.id === id);

  // Styles
  
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
  <div style={div}>
    <h1>Name: {plant.plantname}</h1>
    <h2>Plant Type: {plant.planttype}</h2>
    <h3>Last Watered: {plant.lastWatered}</h3>
    <h3>Last Fed: {plant.lastFed}</h3>
    <h4>Rec'd Water: {plant.recWater}</h4>
    <h4>Rec'd Feed: {plant.recFeed}</h4>
    <h5>User ID: {plant.user_id}</h5>

    <button style={Button} onClick={(event) => edit(plant)}>Edit</button>
    <button style={Button} onClick={(event) => deletePlant(plant)}>Delete</button>
    <Link to="/">
      <button style={Button}>Go Back to Plant List</button>
    </Link>
  </div>
);
};

export default SinglePlant;