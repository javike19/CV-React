import React from 'react';
import "./Hero.css";

const Hero = ({hero}) => {
    return (
        <div className="hero">
            <img src={hero.image} alt="me" />
            <div className="card">
                <h2>
                    {hero.name}
                </h2>
                    <p>🗺️{hero.city} </p>
                    <p>🗓️{hero.birthDate}</p>
                    <p>
                    📧
                    <a href={"mailto:" + hero.email}>
                    javimorenomontejo@gmail.com
                    </a>
                    </p>
                    <p>📱 {hero.phone}</p>
                    <p>💾<a href={hero.gitHub}>
                        GitHub: javike19
                    </a></p>
            </div>
        </div>
    )
}

export default Hero
