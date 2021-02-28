import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const mainPage = () => {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
                </h3>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="row">
                                <div className="col-md-3">
                                    <img id="pic" src="https://avatars.githubusercontent.com/u/70659004?s=460&u=aefa5ed4825766268977b54a23faa4f619c9c5ce&v=4" alt="profile pic" width="100%" height="auto%" />
                                </div>

                                <div className="col-md-8">

                                <p>Hello and welcome to my page! My name is Christian Go.  I am an aspiring developer currently registered with DU's Coding Bootcamp and looking forward to completing the program in March 2021.</p>
    
    <p>I was born and raised in San Diego, California. I've lived in Colorado since exiting military service with the USMC in 2001 and have been loving it since! While California is my birth state and will always hold a special place in my heart, I consider Colorado to be my home</p>
        
    <p>I currently work in the medical insurance field as a contractor to Anthem Blue Cross Blue Shield, which I've done for the last 10 years. The decision to get into coding has been a somewhat spontaneous move as it is a field I've at the very least had a passing interest in.</p>
<p>I love travelling, having visited locales across the United States as well as Japan, the Philippines, China and South America, but would like to visit Australia and Europe in the future.</p>
   </div>
    </div>
       </blockquote>
    </div>
</div>
</div>

        </div>
    )
}
export default mainPage