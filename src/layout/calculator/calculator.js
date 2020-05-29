import React, { Component } from 'react';
import Display from './display/Display';
import ButtonPanel from './buttonpanel/ButtonPanel';

class calculator extends Component {
    render () {
        return (
            <main className="calculator">
                <Display/>
                <ButtonPanel/>
            </main>

        );
    }
}

export default calculator;