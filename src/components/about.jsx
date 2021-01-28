import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>

                    <p>Recently earned a certificate in full-stack development from the UC Berkeley Extension, with newly developed skills in <code>JavaScript, CSS, React.js</code>, and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, I aim to best engage my audience for an impactful user experience.</p>
{/* 
                    <p>I am a student that currently learning Full Stack at UC Berkeley Bootcamp. Self-driven individual with qualified understanding in the field of HTML and CSS.
                    Highly passionate about learning <code>JavaScript, CSS, React.js</code>tools and programming languages.</p> */}


                    <p> 
                      Find me also on GitHub and LinkedIn. 
                      <a href="https://github.com/huqian301" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>&nbsp;
                      <a href="https://www.linkedin.com/in/qian-hu-33aa91132/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>  
      </div>
    )
  }
}

//https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/