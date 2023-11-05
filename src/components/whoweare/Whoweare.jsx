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
          <p>We are Solomon's haven, a dedicated charity organization committed to making a positive impact on the lives of women and children. Our mission is to provide support, care, and opportunities for those in need.</p>
          <p>We help women and children who are facing various challenges, including poverty, lack of education, healthcare, and more. Our team works tirelessly to empower them and create a brighter future for all.</p>
          <Link to='/about'>
            <button className='www-btn'>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Whoweare;
