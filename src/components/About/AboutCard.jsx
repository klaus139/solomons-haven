import React from "react"
import "./About.css"
import { images } from "../../constants"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            Empowering<span>Women and Children</span> for a brighter future
           
          </h1>
          <p>We are a non-profit organization dedicated to making a positive impact on the lives of women and children in need. Our mission is to provide support, education, and resources to help them overcome challenges and build a better future.</p>
          <p>We believe that every woman and child deserves a chance to thrive, and we work tirelessly to make that vision a reality.</p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src={images.aboutimg} alt='' className="about-image" />
          <div className='control-btn'>
            <button className='prev'>
             
            </button>
         
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard