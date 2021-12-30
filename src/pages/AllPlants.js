import React from "react";
import Plant from "../components/plant";

const AllPlants = (props) => {
    <h1>AllPlants</h1>;
    // For each plant in the array, render a Post component
  return props.plants.map((plant) => {
      return <Plant key={plant.id} plant={plant} />
  })
};

export default AllPlants;