import React, { useRef } from "react";
import emailjs from '@emailjs/browser'; // Updated import
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ll9hvoa', 'template_zroe38p', form.current, 'p-tbLsuhs8gF_oSdT')
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully!', {
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.error(error.text);
        toast.error('Failed to send the message. Please try again later.', {
          autoClose: 3000,
        });
      });
  };

  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
          <div className='main-content'>
            <h2>Contact Form</h2>
            <p>Fill out the form below, and we will get back to you soon.</p>

            <form ref={form} onSubmit={sendEmail}>
              <div className='grid1'>
                <div className='input'>
                  <span>
                    Name <label>*</label>
                  </span>
                  <input type='text' name='name' required />
                </div>
               
                <div className='input'>
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input type='tel' name='phone' required />
                </div>
                <div className='input'>
                  <span>
                    Email <label>*</label>
                  </span>
                  <input type='email' name='email' required />
                </div>
                <div className='input'>
                  <span>Subject</span>
                  <input type='text' name='subject' />
                </div>
                
              </div>
              <div className='input inputlast'>
                <span>
                  Write Your Message <label>*</label>
                </span>
                <textarea cols='30' rows='10' name='message' required></textarea>
              </div>
              <button type='submit' className='primary-btn'>
                Submit Now
              </button>
            </form>
          </div>
          <div className='side-content'>
            <h3>Contact us today</h3>
            <p>We are willing and ready to partner with you.</p>
            <br />
            <h3>Message us</h3>
            <span>Solomonshaven23@gmail.com</span>
            <br />
            <span>07088105985</span>
            <br />
            {/* <div className='icon'>
              <h3>Follow Us</h3>
              <div className='flex_space contact-icon'>
              <a
                href="https://instagram.com/haybravosecurity?igshid=NGExMmI2YTkyZg=="
                className="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc36ddb063a39e687b631_Insta-icon.svg"
                  loading="lazy"
                  alt="Instagram Icon"
                  className="social-iconc" /></a
              >
              <a
                href="https://www.facebook.com/people/Hay-Bravo-international-Security-Consulting-Company-LTD/100083540643909/?paipv=0&eav=AfZk-s4y746llh98g-ucTA49Evlvof1CLxJFw7wUuMuxVa74Hh-VyyK0A-8yJhxdWHw&_rdr"
                className="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc46c51c3425c77fb5dc3_fb-icon.svg"
                  loading="lazy"
                  alt="Facebook Icon"
                  className="social-iconc" /></a
              >
              <a
                href="https://twitter.com/BravoHay13872?s=08"
                className="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc54529c06503197e6691_twiter-icon.svg"
                  loading="lazy"
                  alt="Twitter Icon"
                  className="social-iconc" /></a
              >
               
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
