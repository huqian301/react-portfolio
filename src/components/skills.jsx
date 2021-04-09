import React, { Component } from 'react';
import {FaTools,FaDatabase } from 'react-icons/fa';
import { AiOutlineGlobal } from "react-icons/ai";
import { SiJavascript,SiCss3,SiHtml5,SiJquery,SiBootstrap,SiReact,SiNodeDotJs,SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";


export default class Skills extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="skills">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Skills</span>
                    <h2 className="colorlib-heading">What can i do?</h2>            
                        <div className="row">
                            <div className="col-md-4 animate-box " data-animate-effect="fadeInRight">
                                <div className="skill-set">
                                    <span className="skill-span"><AiOutlineGlobal/> </span>
                                    <header className='skill-header'> Web Devolopment</header>
                                    <div className="skill-list">
                                        <label>HTML</label>
                                        <SiHtml5/>
                                    </div>
                                    <div className="skill-list">
                                        <label>CSS</label>
                                        <SiCss3/>
                                    </div>
                                    <div className="skill-list">
                                        <label>JAVASCRIPT</label>
                                        <SiJavascript/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box " data-animate-effect="fadeInLeft">
                            <div className="skill-set">
                                    <span className="skill-span"><FaTools/></span>
                                    <header className='skill-header'>Framework</header>
                                    <div className="skill-list">
                                        <label>NODE.JS</label>
                                        <SiNodeDotJs />
                                    </div>
                                    <div className="skill-list">
                                        <label>jQuery</label>
                                        <SiJquery/>
                                    </div>
                                    <div className="skill-list">
                                        <label>BOOSTRAP</label>
                                        <SiBootstrap/>
                                    </div>
                                    <div className="skill-list">
                                        <label>REACT</label>
                                        <SiReact/>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4 animate-box " data-animate-effect="fadeInRight">
                            <div className="skill-set">
                                    <span className="skill-span"><FaDatabase/></span>
                                    <header className='skill-header'> Databases</header>
                                    <div className="skill-list">
                                        <label>mySql</label>
                                        <GrMysql/>
                                    </div>
                                    <div className="skill-list">
                                        <label>MongoDB</label>
                                        <SiMongodb/>
                                    </div>
                                </div>
                                
                            </div>  
                        </div>
            
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