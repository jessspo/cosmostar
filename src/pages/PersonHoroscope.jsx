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
      
     <div className='shadow'>
            <div>
            <h1>Personality Horoscope</h1>
            </div>
            <div className='box'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas laboriosam corporis blanditiis rem nesciunt mollitia omnis quam doloribus recusandae voluptates adipisci consectetur possimus commodi, ab, cumque suscipit itaque aliquam ratione.
            </div>
      </div>
    </div>
  )
}

export default PersonHoroscope