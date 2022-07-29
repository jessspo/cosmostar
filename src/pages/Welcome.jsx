import React from 'react'
import welcome from "../images/welcome.jpg";
import "./Welcome.css";
import { useNavigate } from 'react-router-dom';

const Welcome = (props)  => {

  const navigate = useNavigate ();

  const navigateHoroscope = () => {
    navigate (`/horoscope`);
  }

  return (
    <div 
    style={{backgroundImage: `url(${welcome})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width:'100%' ,
    height: '100%',
    marginTop: 0,
    }}>
      
      <div className='shadow_welcome'>
        <div>
          <h1 className='shadow_welcome'>WELCOME, <h1 className='name'>*name*</h1>
          {props.name}</h1>
        
          <span className='subtitle_welcome'>your star sign is <button className='button_sign' 
          onClick={navigateHoroscope}>*star_sign*{props.sign}</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Welcome