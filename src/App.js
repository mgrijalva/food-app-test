import React, { useState, useEffect } from "react";
import { Location } from "./Location";
import "./App.css";

// TODO #1: replace this hard-coded data
// with data from the server.
// http://localhost:5000/locations for location information

// Each location has an "image_id" that refers to an image:
// http://localhost:5000/images/2

// TODO #2: hook up the filter at the top of the page (the <select>)

function App() {
  const [filter, setFilter] = useState(undefined);

  // PLACEHOLDER DATA (delete me)
  const locations = [
    {
      id: 1,
      type: "restaurant",
      name: "TODO",
      description: "placeholder...",
      rating: 3,
      image_id: 1,
    },
    {
      id: 2,
      type: "restaurant",
      name: "TODO",
      description: "placeholder...",
      rating: 5,
      image_id: 2,
    },
  ];

  // EXAMPLE request:
  fetch("http://localhost:5000/locations")
    .then((r) => r.json())
    .then((locations) => {
      console.log(locations);
    })
    .catch(console.error);

  // EXAMPLE with filtering
  fetch("http://localhost:5000/locations?type=park")
    .then((r) => r.json())
    .then((locations) => {
      console.log(locations);
    })
    .catch(console.error);

  const filterOptions = [
    { text: "", value: undefined },
    { text: "Restaurants", value: "restaurant" },
    { text: "Parks", value: "restaurant" },
    { text: "Mechanics", value: "mechanics" },
  ];

  return (
    <div>
      <div>
        <p>Filter:</p>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {filterOptions.map((x) => (
            <option value={x.value}>{x.text}</option>
          ))}
        </select>
      </div>
      {locations.map((x) => (
        <Location key={x.id} info={x} />
      ))}
    </div>
  );
}

export default App;
