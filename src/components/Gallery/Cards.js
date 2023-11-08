import React, { useState } from "react";
import {BsFillImageFill} from 'react-icons/bs';

const Cards = (props) => {
  const [popup, setPopup] = useState(false)

  const toggleModal = () => {
    setPopup(!popup)
  }
  return (
    <>
      <div className='items'>
        <div className='img'  onClick={toggleModal} >
          <img src={props.imgaes} alt='Gallery'  />
          
            <div><BsFillImageFill className="iconn" /></div>
          
  
        </div>

        <div className='title'>
          <h3>{props.title} </h3>
        </div>
      </div>

      {popup && (
        <div className='popup'>
          <div className='hide'></div>
          <div className='popup-content'>
            <button onClick={toggleModal}>Close</button>
            <img src={props.imgaes} alt='Gallery' />
          </div>
        </div>
      )}
    </>
  )
}

export default Cards