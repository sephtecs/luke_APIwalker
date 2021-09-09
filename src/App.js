import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import {
  useHistory
} from 'react-router-dom';

function App() {
  const [select, setSelect] = useState("");
  const [id, setId] = useState("");
  const [res, setRes] = useState({}); 
  const history = useHistory();

  const handleAPIcall = (e) => {
    e.preventDefault();
    console.log("we are in the submit handle function") //console log to know that we got to this point
      axios.get(`https://swapi.dev/api/${select}/${id}`) // always have backticks here
      .then((response) => {
        console.log(response)
        setRes(response.data)})
      .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <form style={{textAlign: "center", marginTop: 10}}>
          <div style={{display: "flex", marginLeft: 20}}>
          <span>Search for: </span>
          <select onChange={(e => setSelect(e.target.value))}>
            <option value="people">people</option>
            <option value="planets">planets</option>
          </select>
          <br></br>
          <br></br>
          <span style={{marginRight : 5,  marginLeft: 10}}>ID:</span>
          <input style={{width: 40}} type="text" value={id} onChange={(e) => {setId(e.target.value)}}/>
          <button style={{color:"blue",}} onClick= {handleAPIcall}>Search</button>
        </div>
      </form>
      <h2 style={{textAlign : 'left', marginLeft: 20}}>{res["name"]}</h2>
      <h3 style={{textAlign : 'left', marginLeft: 20}}>Height: {res["height"]}</h3>
      <h3 style={{textAlign : 'left', marginLeft: 20}}>Mass: {res["mass"]}</h3>
      <h3 style={{textAlign : 'left', marginLeft: 20}}>Hair Color: {res["hair_color"]}</h3>
      <h3 style={{textAlign : 'left', marginLeft: 20}}>Skin Color: {res["skin_color"]}</h3>
    </div>
  );
}

export default App;