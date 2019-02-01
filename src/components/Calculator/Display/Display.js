import React from 'react';
import './Display.css';

const Display = (props) => (
    <div className="Display">
        <div className="history display">
            <p>{props.prevNumber} {props.operator}</p>
        </div>
        <div className="result display">
            <p>{props.currentNumber}</p>
        </div>
    </div>
);

export default Display;