import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import ExercisesList from "../src/component/exercises-list"
import EditExercise from "../src/component/edit-exercis"
import CreateExercise from "../src/component/create-exercises"
import CreateUser from "../src/component/create-user"
import Navbar from "../src/component/navbar"



function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <br />
          <Route exact path="/" component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </Router>
    </div>
    
  )
}

export default App;
