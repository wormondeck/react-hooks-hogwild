import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import HogForm from "./HogForm";

import hogs from "../porkers_data";

function App() {
	const [hogWild, setHogWild] = useState(hogs)
	const [greasy, setGreasy] = useState(false)
	const [sortBy, setSortBy] = useState(null)
	const [hiddenHogs, setHiddenHogs] = useState([])
	
	function filterGreasedHog() {
		let filteredHogs = hogWild
		if (greasy) {
		  filteredHogs = filteredHogs.filter((hog) => hog.greased)
		}
		return filteredHogs.filter((hog) => !hiddenHogs.includes(hog.name));
    }

	function sortHogs(filteredHogs) {
		if (sortBy === "name") {
		  return [...filteredHogs].sort((a, b) => a.name.localeCompare(b.name));
		} else if (sortBy === "weight") {
		  return [...filteredHogs].sort((a, b) => a.weight - b.weight);
		}
		return filteredHogs;
	  }
	

	const filteredHogs = filterGreasedHog();
	const sortedHogs = sortHogs(filteredHogs);

	function addHog(hog) {
		console.log("in App", hog)
		setHogWild([...hogWild, hog])
	}

	function switchHideHog(hogName) {
		setHiddenHogs((prevHiddenHogs) => 
		  prevHiddenHogs.includes(hogName)
		  ? prevHiddenHogs.filter((name) => name !== hogName)
		  : [...prevHiddenHogs, hogName]
		)
	}

	return (
		<div className="App">
			<Nav />
			<HogForm onAddHog={addHog} />
			<label>
			 Greasy Hog:{" "} 
			 <input 
			   type="checkbox" 
			   checked={greasy} 
			   onChange={() => setGreasy(!greasy)}
			/>
			</label>
			<div>
			  <label>
				Sort by:
				<select 
				  value={sortBy || ""}
				  onChange={(e) => setSortBy(e.target.value || null)}
				  >
					<option value="">None</option>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				  </select>
			  </label>
			  </div>
			  <br />
			  <div className="pig-container">
			  {sortedHogs.map((hog, index) => (
				<div className="pigTile" key={index}>
			    <HogTile {...hog} />
				<button onClick={() => switchHideHog(hog.name)}>
					{hiddenHogs.includes(hog.name) ? "Show Me!" : "Hide Me!"}
				</button>
				</div>
			  ))}
			  </div>
		</div>
	);
}

export default App;
