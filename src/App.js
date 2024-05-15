import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const [progress, setProgress] = useState(0);



    document.body.style.backgroundColor = "#1f1d1d"
    return (
      <>
      <Router>
        <Navbar WebName="DailyNews"/>
        <LoadingBar
        color='#f11946'
        progress = {progress}
      />
        <Switch>
          <Route exact path="/">
            <News setProgress={setProgress} key="general" pageSize = {13} country = "in" category = "general" />
          </Route>
          <Route exact path="/Business">
            <News setProgress={setProgress} key="business" pageSize = {13} country = "in" category = "business" />
          </Route>
          <Route exact path="/Entertainment">
            <News setProgress={setProgress} key="entertainment" pageSize = {13} country = "in" category = "entertainment" />
          </Route>
          <Route exact path="/Health">
            <News setProgress={setProgress} key="health" pageSize = {13} country = "in" category = "health" />
          </Route>
          <Route exact path="/Science">
            <News setProgress={setProgress} key="science" pageSize = {13} country = "in" category = "science" />
          </Route>
          <Route exact path="/Sports">
            <News setProgress={setProgress} key="sports" pageSize = {13} country = "in" category = "sports" />
          </Route>
          <Route exact path="/Technology">
            <News setProgress={setProgress} key="technology" pageSize = {13} country = "in" category = "technology" />
          </Route>
        </Switch>
      </Router>
      </>
    ) 
  }


export default App