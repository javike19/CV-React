import React from 'react'
import "./AboutMe.css";

const AboutMe = ({aboutMe}) => {
    return (
        <div className="aboutMe">
            <div className="card-about">
                <h2>Sobre mi</h2>
                <p>{aboutMe.text}</p>
            </div>
        </div>
    )
}

export default AboutMe
