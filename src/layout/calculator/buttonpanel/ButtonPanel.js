import React from 'react';
import Button from '../../../components/Button/Button'

const ButtonPanel = () => {
    return (
        <section className="keypad">
            <div className="keypad-row">
            <Button type="primary">CE</Button>
            <Button>C</Button>
            <Button>Del</Button>
            <Button>/</Button>
            </div>
            <div className="keypad-row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>X</Button>
            </div>
            <div className="keypad-row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
            </div>
            <div className="keypad-row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
            </div>
            <div className="keypad-row">
            <Button>0</Button>
            <Button>.</Button>
            <Button>=</Button>
            </div>                  
         </section>
    );
}

export default ButtonPanel;