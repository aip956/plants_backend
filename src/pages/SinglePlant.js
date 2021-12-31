import React from "react";
import { Link } from "react-router-dom";

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
    <h1>{plant.plantname}</h1>
    <h2>{plant.planttype}</h2>
    <h3>{plant.lastWatered}</h3>
    <h3>{plant.lastFed}</h3>
    <h4>{plant.recWater}</h4>
    <h4>{plant.recFeed}</h4>

    <button onClick={(event) => edit(plant)}>Edit</button>
    <button onClick={(event) => deletePlant(plant)}>Delete</button>
    <Link to="/">
      <button>Go Back</button>
    </Link>
  </div>
);
};

export default SinglePlant;