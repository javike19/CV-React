import React from 'react';
import "../More/More.css";

const Other = ({other}) => {
    return (
        <div className="more">
            <div className="more-card">
            <h2>Otros</h2>
                {other.map((item) => {
                    return (
                        <div  key={JSON.stringify(item)}>
                            <p>⚽ {item}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Other
