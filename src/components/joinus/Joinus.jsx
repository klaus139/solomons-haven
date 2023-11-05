import React from 'react'
import { Link } from 'react-router-dom';
import { images } from '../../constants';

const Joinus = () => {
  return (
    <div className='join-container'>
        <div className='join-content'>
            <div className='j-text'>
                <h1>Join With Us</h1>
                <p>The legal definition of a charitable organization (and of charity) varies between countries and in some instances regions of the country. The regulation, the tax treatment, and the way.</p>
                <Link>
                <button className='j-btn'>Join Now</button>
                </Link>

            </div>
            <div>
                <img src='https://preview.colorlib.com/theme/chariter/assets/img/gallery/joining1.jpg' alt='join-1' />
                <img src={images.join1} alt='join' />
            </div>

        </div>

    </div>
  )
}

export default Joinus