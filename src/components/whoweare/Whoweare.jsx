import React from 'react';
import './Whoweare.css';
import { Link } from 'react-router-dom';

const Whoweare = () => {
  return (
    <div className='who-container'>
      <div className='container-box'>
        <div className='img-box'>
          <img src='/images/gala1.jpeg' alt='gala' className='gala' />
        </div>
        <div className='text-box'>
          <h1>Who we are?</h1>
          <p>We are Solomon's Haven, a compassionate charity organization dedicated to improving the well-being of women and children. Our core focus areas include: Maternal health, Child Mortality, youth empowerment, literacy program, support initiative and widows empowerment</p>
                    <p>We actively address challenges such as poverty, lack of education, and healthcare. Our dedicated team works tirelessly to provide support, care, and opportunities, aiming to empower women and children for a brighter and healthier future.</p>
          <Link to='/about'>
            <button className='www-btn'>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Whoweare;
