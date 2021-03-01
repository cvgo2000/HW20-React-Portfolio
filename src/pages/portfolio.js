import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../img/weatherdashboard.png"
import img2 from "../img/dayplanner.png"
import img3 from "../img/employeedirectoryscreen.png"
import img4 from "../img/project1screen.png"
import img5 from "../img/passwordgenerator.png"
import img6 from "../img/purrfect-match.png"
import resume from "../img/Resume.pdf"

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Portfolio
                    </h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a href="https://cvgo2000.github.io/HW06-Weather-Dashboard/">
                                    <img src={ img1 }
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Weather Dashboard</p>
                                <p id="repo"><a href="https://github.com/cvgo2000/HW06-Weather-Dashboard">https://github.com/cvgo2000/HW06-Weather-Dashboard</a></p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://cvgo2000.github.io/HW05-Day-Planner/">
                                    <img src={ img2 }
                                        className="card-img-top" alt="img-two" />
                                </a>
                                <p className="card-text">Day Planner</p>
                                <p id="repo"><a href="https://github.com/cvgo2000/HW05-Day-Planner"
                                >https://github.com/cvgo2000/HW05-Day-Planner</a></p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://cvgo2000.github.io/HW12-Employee-Tracker/">
                                    <img src={ img3 }
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Employee Tracker</p>
                                <p id="repo"><a href="https://github.com/cvgo2000/HW12-Employee-Tracker"
                                >https://github.com/cvgo2000/HW12-Employee-Tracker</a></p>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://enevarez-ops.github.io/projectOne/">
                                    <img src={ img4 }
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Project-1</p>
                                <p id="repo"><a href="https://github.com/enevarez-ops/projectOne"
                                >https://github.com/enevarez-ops/projectOne</a></p>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a href="https://cvgo2000.github.io/HW03-Password-Generator/">
                                    <img src={ img5 }
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Try: Password Generator</p>
                                <p id="repo"><a href="https://github.com/cvgo2000/HW03-Password-Generator"
                                >https://github.com/cvgo2000/HW03-Password-Generator</a></p>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://mighty-sea-42900.herokuapp.com/">
                                    <img src={ img6 }
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Project 2: The Purr-fect Match</p>
                                <p id="repo"><a href="https://github.com/CodyOps/Project-2"
                                >https://github.com/CodyOps/Project-2</a></p>

                            </div>
                        </div>
                        <br></br>
                        <div className="gitProfile">
                            <p>GitHub Profile: <a href="https://github.com/cvgo2000">
                            https://github.com/cvgo2000</a> </p>
                            <p>Linkedin Profile: <a href="https://www.linkedin.com/in/christian-go-6344251b6/"
                            >https://www.linkedin.com/in/christian-go-6344251b6/</a></p>
                            <p>Email Address: cvgo2000@gmail.com</p>
                            <p>Phone Number:(720)329-4253</p>
                            <a href={ resume }
                            > Resume</a>

                        </div>
                    </div>

                </div>






            </div>
        </div>
    )
}
export default portfolio