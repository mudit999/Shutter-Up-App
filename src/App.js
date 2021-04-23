import React from 'react';
import UserAuth from './Components/UserAuth';
import './App.css';
import camera_image from '../src/images/camera2-removebg-preview.png'

function App() {


  return (
      <div className="App">
        <div className = 'header'>Shutter Up
          <img src = {camera_image} alt = 'camera_img' />
        </div>
          <UserAuth/>
      </div>
  );
}

export default App;
