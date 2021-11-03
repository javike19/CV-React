import React from 'react';
import "./More.css";

const More = ({habilities}) => {
    return (
        <div className="more">
            <div className="more-card">
            <h2>Technologies</h2>
                {habilities.map((item) => {
                    return (
                        <div  key={JSON.stringify(item)}>
                            <p>💻 {item}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default More
