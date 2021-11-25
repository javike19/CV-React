import React from 'react'
import "../More/More.css";

const Languages = ({languages}) => {
    return (
        <div className="more">
            <div className="more-card">
            <h2>Idiomas</h2>
                {languages.map((item) => {
                    return (
                        <div  key={JSON.stringify(item)}>
                            <p>🌎 {item}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Languages
