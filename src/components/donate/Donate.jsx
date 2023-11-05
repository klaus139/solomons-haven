import React from 'react';
import { Link } from 'react-router-dom';
import './donate.css';

const Donate = () => {
  return (
    <div className='donate-container'>
        <div className='d-box'>
            <div className='d-text'>
                <h1>They Need Your Help</h1>
                <p>At Solomon's Haven, we strive to make a difference in the lives of those in need. Your support can help us bring hope and positive change to the world. Together, we can create a better future for everyone.</p>
                <Link to='/contact'>
                <button className='d-btn'>Donate to our cause</button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Donate;
