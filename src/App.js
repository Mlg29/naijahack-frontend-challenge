import React from 'react';
import logo from './logo.svg';
import './App.css';
import HowItWork from './components/how-it-works';
import NavBar from "../src/components/navbar"



function App() {
  return (
    <div className="">
      <NavBar />
  
      <div className="container">
        <div className="row section-one">
          <div className="col-lg-6">
          <h1 className="header">Build and grow your community through your skills</h1>
            <p className="paragraph">Participate in challenges, Learn, get hired, and grow</p>
            <button className="button">Get Started</button>
          </div>
          <div className="col-lg-6">
          <img className="section1-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1585944591/st2fsulbzju7kos2dvdg.png" alt="" width="400" />
          </div>
        </div>
      </div>

        <p className="section2">We are building the bridges and connecting tech people with the right opportunities. 
          Companies also get to choose the best talents and hire in the shortest time possible
        </p>

      <div className="section3">
        <h1 className="section3-header">How It Work</h1>
        <div className="section3-div">
          <HowItWork 
            header="Hackers"
            image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1585944590/lnqg16xib7duj5bkf9tb.png"
            paragraph="Learn and grow as a tech professional. Gain access to learning resources, hackalthons and more"
          />
          <HowItWork 
            header="Enablers"
            image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1585944591/zrh486dgyb16k12on19g.png"
            paragraph="Employers, recruiters, HR Personnel of organisations, and the likes can get the best candidates for jobs"
          />
          <HowItWork 
            header="Advocates"
            image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1585944590/kjnwhxkjz8hxxgnzlkqp.png"
            paragraph="Providing resources to enable the hackers through tools, products or services"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
