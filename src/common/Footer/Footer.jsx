import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>We are a Non-Governmental Organisation that supports women, girls and children</p>
            
            <p>We offer humanitarian services to Women in need of love, care, protection and shelter and we ensure we let them know they are not alone.</p>
            <div className='icon flex_space'>
            <a href="https://www.linkedin.com/in/haybravo-international-limited-75b1a7283" className="social-media-link w-inline-block">
                      <img
                        src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc57ea43e8f10547bacad_linkedIn-icon.svg"
                        loading="lazy"
                        alt="LinkedIn Icon"
                        className="social-icon"
                      />
                    </a>
                    <a href="https://twitter.com/haybravo_ltd" className="social-media-link w-inline-block">
                      <img
                        src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc54529c06503197e6691_twiter-icon.svg"
                        loading="lazy"
                        alt="Twitter Icon"
                        className="social-icon"
                      />
                    </a>
                    <a href="https://www.facebook.com/people/Hay-Bravo-international-Security-Consulting-Company-LTD/100083540643909/?paipv=0&eav=AfZk-s4y746llh98g-ucTA49Evlvof1CLxJFw7wUuMuxVa74Hh-VyyK0A-8yJhxdWHw&_rdr" className="social-media-link w-inline-block">
                      <img
                        src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc46c51c3425c77fb5dc3_fb-icon.svg"
                        loading="lazy"
                        alt="Facebook Icon"
                        className="social-icon"
                      />
                    </a>
                    <a
              href="https://instagram.com/haybravosecurity?igshid=NGExMmI2YTkyZg=="
              class="social-media-link w-inline-block"
            >
              <img
                src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc36ddb063a39e687b631_Insta-icon.svg"
                loading="lazy"
                alt="Instagram Icon"
                class="social-icon"
              />
            </a>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul className="link-list">
              <li className="list">
                <Link to='/'>Home</Link>
              </li>
              <li className="list">
                <Link to='/about'>About us</Link>
              </li>
              <li className="list">
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li className="list">
                <Link to='/destinations'>Donations</Link>
              </li>
              <li className="list">
                <Link to='/blog'>Blog</Link>
              </li>
              <li className="list">
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li className="list">
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='post'>
            <h2>RECENT POSTS</h2>
            <ul className="post-list">
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
            </ul>
          </div>

          <div className='news'>
            <h2>NEWSLETTER</h2>
            <p>Subscribe to our newsletter</p>

          
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