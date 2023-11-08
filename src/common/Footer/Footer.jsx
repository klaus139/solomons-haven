import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>We are a Non-Governmental Organisation that aims at helping widows, children and the women.</p>
            <br />
            <p>Our goal is to provide shelter, food, protection and warmnt for women and children living in rural communities. We are an affiliate of Widows-rendezvous UK</p>
            <div className='icon flex_space'>
            <a href="https://www.linkedin.com" className="social-media-link w-inline-block">
                      <img
                        src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc57ea43e8f10547bacad_linkedIn-icon.svg"
                        loading="lazy"
                        alt="LinkedIn Icon"
                        className="social-icon"
                      />
                    </a>
                    <a href="https://twitter.com" className="social-media-link w-inline-block">
                      <img
                        src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc54529c06503197e6691_twiter-icon.svg"
                        loading="lazy"
                        alt="Twitter Icon"
                        className="social-icon"
                      />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61552990510905&mibextid=LQQJ4d" className="social-media-link w-inline-block">
                      <img
                        src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc46c51c3425c77fb5dc3_fb-icon.svg"
                        loading="lazy"
                        alt="Facebook Icon"
                        className="social-icon"
                      />
                    </a>
                    <a
              href="https://instagram.com"
              class="social-media-link w-inline-block"
            >
              <img
                src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc36ddb063a39e687b631_Insta-icon.svg"
                loading="lazy"
                alt="Instagram Icon"
                class="social-icon"
              />
            </a>
            
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
             
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>Food Drive for those in rural environment</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2023</span>
              </li>
              <li>
                <p>Medical and you</p>
                <label className='fa fa-calendar-alt'></label>
                <span>21 June 2023</span>
              </li>
              <li>
                <p>Against Abuse</p>
                <label className='fa fa-calendar-alt'></label>
                <span>12 Nov 2023</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>Join our NEWSLETTER</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer