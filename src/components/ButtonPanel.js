import React from 'react';

const ButtonPanel = () => {
    return (
        <div className="button-panel">
            <div>
            <button className="red">CE</button>
            <button>C</button>
            <button>Del</button>
            <button>/</button>
            </div>
            <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>X</button>
            </div>
            <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            </div>
            <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            </div>
            <div>
            <button>0</button>
            <button>.</button>
            <button>=</button>
            </div>                  
         </div>
    );
}

export default ButtonPanel;