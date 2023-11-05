import React from 'react';
import './HomeGallery.css';


const HomeGallery = () => {
  return (
    <div className='hm-container'>
        <div className='hm-items'>
            <div className='hm-item'>
                <img src='https://preview.colorlib.com/theme/chariter/assets/img/icon/count-icon1.svg' alt='hands' className='item-img' />
                <div className='hm-text'>
                <h1>35+</h1> 
                <p>Active cases</p>
                </div>


            </div>
            <div className='hm-item'>
                <img src='https://preview.colorlib.com/theme/chariter/assets/img/icon/count-icon1.svg' alt='hands' className='item-img' />
                <div className='hm-text'>
                <h1>35+</h1> 
                <p>Active cases</p>
                </div>


            </div>

        </div>

    </div>
  )
}

export default HomeGallery