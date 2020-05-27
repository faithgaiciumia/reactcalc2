import React from 'react';
import DisplayEquation from './DisplayEquation';
import DisplayResult from './DisplayResult';
import ButtonPanel from './ButtonPanel';

const Calculator = () => {
    return(
        <main className="calculator">
            <DisplayEquation/>
            <DisplayResult/>
            <ButtonPanel/>
        </main>
    );
}

export default Calculator;