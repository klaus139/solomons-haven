import React from "react";
import "./About.css";
import { images } from "../../constants";

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            Empowering<span>Women and Children</span> for a brighter future
          </h1>
          <p>
            We are a non-profit organization committed to making a positive impact on the lives of women and children. Our mission spans various crucial areas:
            <br />
            Maternal Health <br/> Child Mortality <br /> Youth Empowerment <br /> Support for Widows <br/> Literacy Programs <br /> Youth Health Initiative
          </p>
        
          <p>
            Our dedication is to provide support, education, and resources to empower these communities, helping them overcome challenges and build a better future. We firmly believe that every woman and child deserves a chance to thrive, and we work tirelessly to turn this belief into a reality.
          </p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src={images.aboutimg} alt='' className="about-image" />
          <div className='control-btn'>
            <button className='prev'>
              {/* Add functionality for previous button if needed */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
