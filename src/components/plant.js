import React from "react";
import { Link } from "react-router-dom";

// Destructure the plant from props

const Plant = ({ plant }) => {
// Style Objects
const div = {
  textAlign: "center",
  border: "3px solid",
  margin: "10px auto",
  width: "80%",
};

return (
<div style={div}>
<Link to={`/plant/${plant.id}`}>
  <h1>{plant.subject}</h1>
</Link>
<h2>{plant.details}</h2>
</div>
);
};

export default Plant;