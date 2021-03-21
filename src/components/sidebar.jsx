/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight"><br></br><br></br><br></br>
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(img/profile_pic.jpeg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Qian Hu</a></h1>
              <h5>Front End Developer</h5>
              <span className="email"><i className="icon-mail"></i> huqian0301@gmail.com</span>
            </div><br/>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About Me</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  {/* <li><a href="#contact" data-nav-section="contact">Contact</a></li>   */}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/qian-hu-33aa91132/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/huqian301" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /><br></br>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}


//https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/