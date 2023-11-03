import React, { useState } from "react"
import Data from "./Data"
import { Link } from "react-router-dom"

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <>
      <section className='slider'>
        <div className='control-btn'>
          <button className='prev' onClick={prevSlide}>
            <i className='fas fa-caret-left'></i>
          </button>
          <button className='next' onClick={nextSlide}>
            <i className='fas fa-caret-right'></i>
          </button>
        </div>

        {Data.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && <img src={slide.image} alt='HomeImage' />}
            </div>
          )
        })}
      </section>

      <section className='slide-text'>
        <div className=''>
          <h2>Support a cause  <br /> you care about</h2>
          <p>Together we can, Giving back through life changing experiences</p>
          <Link to='/contact'>
          <button className="join-btn">Join Us</button>
          </Link>

          
        </div>
      </section>
    </>
  )
}

export default Home