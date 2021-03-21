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

                    {/* <p>Recently earned a certificate in full-stack development from the UC Berkeley Extension, with newly developed skills in <code>JavaScript, CSS, React.js</code>, and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, I aim to best engage my audience for an impactful user experience.
                    </p> */}
                    <p>
                    As a computer science graduate, I'm excited to begin my new career as a web developer. My recently-finished Bootcamp experience has shaped my information architecture, data structure, and agile web development knowledge. With a strong interest in front-end/UI development, I am confident I can make an immediate contribution given the opportunity.
                    </p>
                    <p>
                    In my last team project, I was a front-end developer responsible for the application’s layout, the biggest challenge for our team was connect the front-end with the back-end. To work around issues, I translated the team’s wireframes and mockups into responsive, interactive features, demonstrating working knowledge with frontend technologies by using HTML/CSS, React, and JavaScript. I built a highly functional web app by user-friendly design to allow users to create a workout and track it weekly.
                    </p>
                    <p>
                    I am a self-motivated web developer, eager for this opportunity to manage the coding, innovative design, and layout of Cozmo’s website. I can work alone but I also have great interpersonal skills that make it easy to work with a team both inside and outside the company.
                    </p>
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