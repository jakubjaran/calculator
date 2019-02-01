import React, { Component } from 'react';
import './Calculator.css'

import Buttons from './Buttons/Buttons';
import Display from './Display/Display';

class Calculator extends Component {
    state = {
        numbers: [],
        currentNumber: 0,
        operator: null,
        prevNumber: null
    };

    onNumberClick = (event) => {
        if (this.state.numbers.length <=9) {
            const numbers = [...this.state.numbers];
            numbers.push(event.target.value);
            const currentNumber =  numbers.join('');
            this.setState({
                numbers: numbers,
                currentNumber: currentNumber
            });
        };
    };

    onOperatorCLick = (event) => {
        const operator = event.target.value;
        this.setState(prevState => {
            return {
                prevNumber: prevState.currentNumber,
                currentNumber: 0,
                numbers: [],
                operator: operator
            };
        });
    };

    onCalc = () => {
        let result = null;
        const num1 = Number(this.state.prevNumber);
        const num2 = Number(this.state.currentNumber);
        switch (this.state.operator) {
            case '+':
            result = num1 + num2;
            break;
            case '-':
            result = num1 - num2;
            break;
            case '*':
            result = num1 * num2;
            break;
            case '/':
            result = num1 / num2;
            break;
            default:
        };
        this.setState({
            currentNumber: result,
            prevNumber: null,
            numbers: [],
            operator: null
        });
    };

    onBkspcClick = () => {
        const numbers = [...this.state.numbers];
        if(numbers.length > 0) {
            numbers.pop();
            const currentNumber = numbers.join('');
            this.setState({
                currentNumber: currentNumber,
                numbers: numbers
            });
            if(currentNumber === '') {
                this.setState({ currentNumber: 0 });
            };
        };
    };

    onCClick = () => {
        this.setState({
            currentNumber: 0,
            prevNumber: null,
            numbers: [],
            operator: null
        });
    };

    onCEClick = () => {
        this.setState({
            currentNumber: 0,
            numbers: []
        });
    };

    render() {
        return (
        <div className="Calculator">
            <Display
                prevNumber={this.state.prevNumber}
                operator={this.state.operator}
                currentNumber={this.state.currentNumber}
            />
            <Buttons
                onCClick={this.onCClick}
                onCEClick={this.onCEClick}
                onBkspcClick={this.onBkspcClick}
                onNumberClick={this.onNumberClick}
                onOperatorCLick={this.onOperatorCLick}
                onCalc={this.onCalc}
            />
        </div>
        );
    };
};

export default Calculator;