import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {API_KEY, BASE_URL} from './index'
import { Player } from 'video-react'



function App() {
const [data, setData] = useState([])
useEffect(()=>{
  axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
  .then(response=>{
    console.log(response.data)
    setData(response.data)
  }).catch(err=>console.log(err))
},[])


    <Player
      playsInline
      src= {data.url}
    />


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <h1>Astronomy Photo Of The Day</h1>
      <h2>{data.date}</h2>  
      <Player
    </div>
  );
}

export default App;


// {/* <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video> */}