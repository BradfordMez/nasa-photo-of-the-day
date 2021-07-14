import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {API_KEY, BASE_URL} from './index'

import "../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';


function App() {
const [data, setData] = useState([])
useEffect(()=>{
  axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
  .then(response=>{
    console.log(response.data)
    setData(response.data)
  }).catch(err=>console.log(err))
},[])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <h1>Astronomy Photo Of The Day</h1>
      <iframe width='800' height='450' title={data.title} src = {data.url}/>
      <h2>{data.title}</h2>
      <h3>{data.date}</h3>
      <p>{data.explanation}</p>
    </div>
  );
  }

export default App;


