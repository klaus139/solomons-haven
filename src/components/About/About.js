import React from "react";
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from '../../common/HeadTitle/HeadTitle';
import { images } from "../../constants";

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Our Goals
            </h1>
            <p>Our primary goal is to empower women and children in need. We are dedicated to making positive changes in their lives</p>
            <p>We do this by engaging in charity donations, food drives, free medical consultations, seminars and workshops, cash donations and lots more.</p>
            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='row image'>
            <img src={images.about} alt='about' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About