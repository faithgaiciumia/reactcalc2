import React from 'react';
import DisplayEquation from './DisplayEquation';
import DisplayResult from './DisplayResult';

const display = () => (
    <div className="screen">
        <DisplayEquation/>
        <DisplayResult/>    
    </div>
)

export default display;