import React from 'react'
import horoscope from "../images/horoscope.jpg";
import "./PersonHoroscope.css";

const PersonHoroscope = (props) => {
  return (
    <div 
      style={{backgroundImage: `url(${horoscope})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

      width:'100%' ,
      height: '100%',
      marginTop: 0,
      }}>
      
      <div className='shadow_horoscope'>
            <h1>Gemini</h1>
      
          <div className='box'>
            <p>The twins are used to describe the sign of Gemini because typical Gemini people love to share ideas with someone else. The most important thing for a Gemini is communication. Gemini people are almost always curious about lots of different things. A typical Gemini person usually enjoys being with other people, and loves to talk about the latest thing he is doing. People usually like their Gemini friends, because they have something interesting to share with everybody.</p>

            <p>Many Gemini people are talented at writing, teaching and public speaking. It is especially important for Gemini people to travel and meet new people.</p>
          </div>
      </div>
    </div>
  )
}

export default PersonHoroscope