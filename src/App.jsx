import React, { Component } from 'react';
import autoBind from 'auto-bind'
import './App.css';
import Test from './components/Test';
import '../semantic/dist/semantic.min.css';
import { Container, Header } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'


const jsonquestions = require('./questions/questions.json')

class App extends Component {

  constructor(props) {
    super(props);
    autoBind(this)

    this.state = {
      questions : jsonquestions.questions,
      status: false,
      questionNumber: Math.floor(Math.random() * 9) + 0,
      answered: false,
      selectStatus: false,
      answer : ''
    }
  }
  
  showMe(){
   this.setState({
    status: true
   })
  }

  onClickHandler (index){

    const currentQuestion = this.state.questions[this.state.questionNumber]
    const {optiona,optionb,optionc,optiond,answerkey} = this.state.questions[this.state.questionNumber];
    const options = [optiona,optionb,optionc,optiond]
    console.log(options[answerkey]);

   this.setState({
    answered: true,
    answer : options[answerkey],
    selectStatus : (currentQuestion.answerkey === index) ? true : false
   })
  }

  render() {
    console.log(this.state.questions[this.state.questionNumber])
    const {questions,optiona,optionb,optionc,optiond,answerkey} = this.state.questions[this.state.questionNumber];
    const options = [optiona,optionb,optionc,optiond]

    return (
      <Container text>
        <Header as='h2'>Psc Hub</Header>
        <Test name="pschub" 
              question={questions} 
              options={options} 
              answerkey={answerkey} 
              getComponent={this.onClickHandler} />
        {this.state.answered === true &&
          <Message
            icon={(this.state.selectStatus) ? 'checkmark' : 'remove'}
            header={questions}
            content={this.state.answer}
          />        
        }

      </Container>
    );
  }
}

export default App;
