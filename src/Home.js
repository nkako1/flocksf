import React from 'react';
import './Home.css';
import bg from './img/bg.mp4';


function Home() {
  return (
    <div className="home wrapper">
      <div className="pageTitle">
        Flock with us.
      </div>
      <div className="pageSubtitle">
        Flock is a small UI/UX design firm based in SF.
      </div>
      <video autoPlay loop muted id='video'>
        <source src={bg} type='video/mp4' />
      </video>
    </div>
  );
}

export default Home;
