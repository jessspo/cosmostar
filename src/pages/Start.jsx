import React from 'react'
import start from "../images/start.jpg"
import { useNavigate } from "react-router-dom";
import "./Start.css"

const Start = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate (`/login`);
  };

  return (
    // <div>
      <div 
        style={{backgroundImage: `url(${start})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width:'100%' ,
        height: '100%',
        marginTop: 0,
        }}>
          <div className='shadow'>
          <div className='title'>
            <h1 className='cosmic_title'>Cosmic <span className="star_title">
            <br /> STAR</span></h1>
            </div>
          </div>
            <h2><button onClick={{handleStart}}className='start' >start</button></h2>
      </div>
  )
}

export default Start