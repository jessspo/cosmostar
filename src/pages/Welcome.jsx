import React from 'react'
import welcome from "../images/welcome.jpg"

function Welcome(props) {
  return (
    <div 
    style={{backgroundImage: `url(${welcome})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width:'100%' ,
    height: '100%',
    marginTop: 0,
    }}>
     <div className='shadow'>
            <div className='title'>
              <h1 className='cosmic_title'>Welcome <span className="star_title">
              <br />{props.name}</span></h1>
            </div>
      </div>
    </div>
  )
}

export default Welcome