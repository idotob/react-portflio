import myphoto from '../images/tobi.jpg'
import projectOne from '../images/Project 1.png'
import projectTwo from '../images/Project 2.png'
import projectThree from '../images/Project 3.png'
import './Homepage.css'
import '../pages/styles.css'
import { app, analytics } from '../message'
import { useState } from 'react'

function Homepage () {

  const handleSubmission = async (formData) => {
      const data = {
        fullname: formData.get("full-name"),
        email: formData.get("email"),
        message: formData.get("message")
      }
    }
  
  
  return (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        <header id="logo-nav">
          <div>
            <p>TOBI</p>
          </div>

          <div>
            <nav>
              <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Project</a></li>
                <li><a href="#contact"><button>Contact</button></a></li>
              </ul>

              <button name="menu" id="menu__icon"><i className="uil uil-bars"></i></button>
            </nav>
          </div>
        </header>

        <div className="about section" id="about">
          <div id="column1">
            <img src={myphoto} alt="tobi's photo"/>
          </div>
          <div id="column2">
            <h1>Hello, I'm Tobi and I'm a front-end developer</h1>
            <p className='description'>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='resume' type="download" onClick={window.open('../images/Oluwatobi Victor CV.pdf')}>Download Resume</button>
          </div>
        </div> 

        <div className="projects section" id="projects">
          <h1>Projects</h1>

            <div className="all-projects">
              <div className="project">
                <a href="https://idotob.github.io/louna/#"><img src={projectOne} alt="Louna Marketing Agency"/></a>
                <div>
                  <h4>Louna Marketing Agency</h4>
                  <p>As a certified Responsive Web Designer with in-depth knowledge of HTML5, CSS and Figma, my designs are rooted in functionality and user experience. My education at Scrimba has honed my skills in JavaScript and React Js, empowering me to craft interactive and responsive websites. With fluency in English, French, and Yoruba, I bring a unique multicultural perspective to web development. My goal is to leverage these languages to create accessible and inclusive digital spaces while remaining eager to embrace new challenges and growth opportunities in the tech industry.</p>
                </div>
              </div>

              <div className="project">
                <a href="https://mariaemosional.com"><img src={projectTwo} alt="Maria Emosional"/></a>
                <div>
                  <h4>Maria Emosional</h4>
                  <p>As a certified Responsive Web Designer with in-depth knowledge of HTML5, CSS and Figma, my designs are rooted in functionality and user experience. My education at Scrimba has honed my skills in JavaScript and React Js, empowering me to craft interactive and responsive websites. With fluency in English, French, and Yoruba, I bring a unique multicultural perspective to web development. My goal is to leverage these languages to create accessible and inclusive digital spaces while remaining eager to embrace new challenges and growth opportunities in the tech industry.</p>
                </div>
              </div>

              <div className="project">
                <a href="https://divineconsultingct.com/"><img src={projectThree} alt="Divine Consulting"/></a>
                <div>
                  <h4>Divine Consulting</h4>
                  <p>As a certified Responsive Web Designer with in-depth knowledge of HTML5, CSS and Figma, my designs are rooted in functionality and user experience. My education at Scrimba has honed my skills in JavaScript and React Js, empowering me to craft interactive and responsive websites. With fluency in English, French, and Yoruba, I bring a unique multicultural perspective to web development. My goal is to leverage these languages to create accessible and inclusive digital spaces while remaining eager to embrace new challenges and growth opportunities in the tech industry.</p>
                </div>
              </div>
            </div>
        </div>

        <div className="form section">
          <h3 className='contact-header'>Get In Touch</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <form action={handleSubmission}>
              <label htmlFor='full-name'>Full Name</label>
              <input 
                type="text"
                name="full-name"
                id="full-name"
                defaultValue="John Smith"
              />
              <label htmlFor='email'>Email</label>
              <input 
                type="email"
                name="email"
                id="email"
                defaultValue="johnsmith@gmail.com"
              />
              <label htmlFor='message'>Message</label>
              <textarea 
                cols="80" 
                rows="10"
                name="message"
                id="message"
                defaultValue="Enter your text here...">
              </textarea>
              <button type="submit">Submit</button>
            </form>
        </div>
        

        <footer>
          <div className="socials">
            <a href="https://www.linkedin.com/in/oluwatobi-idowu-0455a01b6/"><i className="uil uil-linkedin"></i></a>
            <a href="tel: +33665094100"><i className="uil uil-whatsapp"></i></a>
            <a href="https://www.instagram.com/icmvie/"><i className="uil uil-instagram"></i></a>
            <a href="https://github.com/idotob"><i className="uil uil-behance"></i></a>
          </div>
          <p className="copyright">&copy 2025 Idowu Oluwatobi. All rights reserved.</p>
        </footer>
      </>
  )
}
export default Homepage