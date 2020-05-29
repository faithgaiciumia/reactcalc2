import React, { Component } from "react";
import Calculator from './layout/calculator/calculator';


class App extends Component{
    render(){
        return(
            <div className="app">                
                <Calculator/>
            </div>
        );
    }
}

export default App;