import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
      }
    });
  };

  onSubmit = () => {
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
      <div className="App">
        <div className="calculator">
          <div className="history display">
            <p>{this.state.prevNumber} {this.state.operator}</p>
          </div>
          <div className="result display">
            <p>{this.state.currentNumber}</p>
          </div>
          <div className="wrapper">
            <button className="alt" value="c" onClick={this.onCClick}>C</button>
            <button className="alt" value="ce" onClick={this.onCEClick}>CE</button>
            <button className="big alt" value="del" onClick={this.onBkspcClick}>&lt;--</button>
            <button value="7" onClick={this.onNumberClick}>7</button>
            <button value="8" onClick={this.onNumberClick}>8</button>
            <button value="9" onClick={this.onNumberClick}>9</button>
            <button className="alt" value="/" onClick={this.onOperatorCLick}>/</button>
            <button value="4" onClick={this.onNumberClick}>4</button>
            <button value="5" onClick={this.onNumberClick}>5</button>
            <button value="6" onClick={this.onNumberClick}>6</button>
            <button className="alt" value="*" onClick={this.onOperatorCLick}>*</button>
            <button value="1" onClick={this.onNumberClick}>1</button>
            <button value="2" onClick={this.onNumberClick}>2</button>
            <button value="3" onClick={this.onNumberClick}>3</button>
            <button className="alt" value="-" onClick={this.onOperatorCLick}>-</button>
            <button className="alt" value="." onClick={this.onNumberClick}>.</button>
            <button value="0" onClick={this.onNumberClick}>0</button>
            <button className="alt" onClick={this.onSubmit}>=</button>
            <button className="alt" value="+" onClick={this.onOperatorCLick}>+</button>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
