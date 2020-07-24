import React from "react";
import './about.components.css'

function About() {
    return (<div className="about">
        <h1 className="header">About Me</h1>

        <div className="container">
            <div className="jumbotron">
                <h2>Gaurav Sharma</h2>
                <h5 >Web Developer</h5>
                <p>gauravsharma1997100@gmail.com | (+91)9901511725 |Raipur(C.G)</p>
                <p>
                    <strong>Linkedin:</strong><a className="profileLink" href="https://www.linkedin.com/in/gaurav-sharma-473864166/">linkedin.com/in/gaurav-sharma-473864166/</a>
                    <strong>Github:</strong><a className="profileLink" href="https://www.linkedin.com/in/gaurav-sharma-473864166/">linkedin.com/in/gaurav-sharma-473864166/</a>
                </p>

                <h4>Skills:</h4>
                <strong> Programming Languages</strong>: Java, JavaScript, C,C++,Python SQL, HTML, CSS, <br></br>
                <strong> Tools and Technologies</strong> : Spring Framework,Nodejs, Express, Angular,ReactJS, Heroku, MySQL, PostgreSQL, MongoDB, GIT, Bootstrap, jQuery.



            </div>


        </div>



    </div>);
}

export default About;