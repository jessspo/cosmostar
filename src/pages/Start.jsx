import React from 'react'
import start from "../images/start.jpg"
import { useNavigate } from "react-router-dom";
import "./Start.css"

const Start = () => {
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate (`/register`);
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
          <div className='start_title'>
            <h1 className='cosmic_title'>Cosmic <span className="star_title">
            <br />STAR</span></h1>
            </div>
          </div>
            <h2><button onClick={navigateRegister} className='start' >start</button></h2>
      </div>
  )
}

export default Start