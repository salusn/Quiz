import React, { Component } from 'react';
import autoBind from 'auto-bind'
import logo from './logo.svg';
import './App.css';
import Test from './components/Test';

const jsonquestions = require('./questions/questions.json')

class App extends Component {

  constructor(props) {
    super(props);
    autoBind(this)

    this.state = {
      questions : jsonquestions.questions,
      status: false,
      questionNumber: 0
    }
    //const ques = this.state.questions[0];
  }
  
  showMe(){
   this.setState({
    status: true
   })
  }

  render() {
    console.log(this.state.questions[0])
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Test name="pschub" question={this.state.questions[this.state.questionNumber].questions} />
      </div>
    );
  }
}

export default App;
