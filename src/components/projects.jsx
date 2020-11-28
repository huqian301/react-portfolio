import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <div>
			<section className="colorlib-work" data-section="projects">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Work</span>
							<h2 className="colorlib-heading animate-box">Recent Projects</h2>
						</div>
					</div>
					<div className="row">
					<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: 'url(img/iron.png)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Iron Dojo</a></h3>
										<span>A web application that allows you to track your strength.</span>
										<p className="icon">
                                            <span><a href="https://the-iron-dojo.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
											<span><a href="https://github.com/huqian301/strengthApp" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: 'url(img/homechef-app.png)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">The Home Chef App</a></h3>
										<span>This app for users to search recipes and drinks by ingredients.</span>
										<p className="icon">
											<span><a href="https://huqian301.github.io/project-api/" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
											<span><a href="https://github.com/huqian301/project-api" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: 'url(img/weather-dashboard.png)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Weather Dashboard App</a></h3>
										<span>This app for users to search the weather by using city's name.</span>
										<p className="icon">
                                            <span><a href="https://huqian301.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
											<span><a href="https://github.com/huqian301/weather-dashboard" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
							<div className="project" style={{backgroundImage: 'url(img/quiz-app.png)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Quiz App</a></h3>
										<span>This app for user to test their js skills.</span>
										<p className="icon">
                                            <span><a href="https://huqian301.github.io/quiz_app/" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
											<span><a href="https://github.com/huqian301/quiz_app" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
							<div className="project" style={{backgroundImage: 'url(img/day-planner.png)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Day Planner App</a></h3>
										<span>This app for users to save events for each hour of the day.</span>
										<p className="icon">
                                            <span><a href="https://huqian301.github.io/day_planer/" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
											<span><a href="https://github.com/huqian301/day_planer" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: 'url(img/password-generator.png)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Password Generator App</a></h3>
										<span>This app for users to create a random password by their requirements.</span>
										<p className="icon">
                                            <span><a href="https://huqian301.github.io/password-generator/" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
											<span><a href="https://github.com/huqian301/password-generator" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: 'url(img/note-taker.png)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Note Taker App</a></h3>
										<span>This app for users to  to write, save, and delete notes.</span>
										<p className="icon">
                                            <span><a href="https://app-notetaker.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
											<span><a href="https://github.com/huqian301/note-taker" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a></span>
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