import React from "react";
import { Link } from "react-router-dom";

// Destructuring the props needed to get our plant, including router prop match


const SinglePlant = ({ plants, match }) => {
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
    <h1>{plant.subject}</h1>
    <h2>{plant.details}</h2>
    <Link to="/">
      <button>Go Back</button>
    </Link>
  </div>
);
};

export default SinglePlant;