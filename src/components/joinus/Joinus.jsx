import React from 'react';
import './joinus.css';
import { Link } from 'react-router-dom';
import { images } from '../../constants';

const Joinus = () => {
  return (
    <div className='join-container'>
        <div className='join-content'>
            <div className='j-text'>
                <h1>Join With Us</h1>
                <p>Help us to spread love to the people who needs it the most. Ensuring that they feel the warmt of love, support and charity that we share</p>
                <Link to='/contact'>
                <button className='j-btn'>Join Now</button>
                </Link>

            </div>
            <div className='join-img-div'>
                <img src='https://preview.colorlib.com/theme/chariter/assets/img/gallery/joining1.jpg' alt='join-1' />
                <img src={images.join1} alt='join' />
            </div>

        </div>

    </div>
  )
}

export default Joinus