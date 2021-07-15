import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {API_KEY, BASE_URL} from './index'
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  background-color: ${props=>props.theme.headerColor};
  color: ${props=>props.theme.primaryColor};
  padding-top:1em;
  margin:.3em;
  border: .8em ridge ${props=>props.theme.tertiaryColor};
`

const StyledH1 = styled.h1`
  background-color: ${props => props.theme.secondaryColor};
  margin-left: 18em;
  margin-right:18em;
  padding-top:.5em;
  padding-bottom:.5em;
  border: .2em double ${props=>props.theme.tertiaryColor};
  border-radius: 1em;
`
const StyledTitle = styled.h2`
  background-color: ${props => props.theme.secondaryColor};
  padding-top:.5rem;
  padding-bottom:.5rem;
  padding-right:2rem;
  padding-left:2rem;
  margin-right:24rem;
  margin-left:24rem;
  border: .3em double ${props=>props.theme.primaryColor};
  color: ${props=>props.theme.tertiaryColor};
  border-radius: 1.5em;
`

const StyledDate=styled.h3`
  color: ${props=>props.theme.white};
  background-color: ${props=>props.theme.secondaryColor};
  padding-right:.5rem;
  padding-left:.5rem;
  padding-top:.5rem;
  padding-bottom:.5rem;
  margin-right:45rem;
  margin-left:45rem;
  border: .3em double ${props=>props.theme.primaryColor};
  border-radius: 2em;
`
const StyledExplanation=styled.p`
  background-color: ${props=>props.theme.secondaryColor};
  padding-right:2rem;
  padding-left:2rem;
  padding-top:1rem;
  padding-bottom:1rem;
  margin-left:2rem;
  margin-right:2rem;
  border: 1em double ${props=>props.theme.tertiaryColor};
  border-radius:1em;
`


function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    .then((response)=>{
      console.log(response.data)
      setData(response.data)
    })
    .catch(err=>console.log(err))
  },[])

  return (
    <StyledDiv>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <StyledH1>Astronomy Photo Of The Day</StyledH1>
      {/* <iframe width='800' height='450' title={data.title} src = {data.url}/> */}
      <img src = {data.url} alt= 'Photo of the day'/>
      <StyledTitle>{data.title}</StyledTitle>
      <StyledDate>{data.date}</StyledDate>
      <StyledExplanation>{data.explanation}</StyledExplanation>
    </StyledDiv>
  );
  }

export default App;


