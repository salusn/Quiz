import React, { Component } from 'react';
import autoBind from 'auto-bind'
import './App.css';
import Test from './components/Test';
import '../semantic/dist/semantic.min.css';
import { Container, Header } from 'semantic-ui-react'


const jsonquestions = require('./questions/questions.json')

class App extends Component {

  constructor(props) {
    super(props);
    autoBind(this)

    this.getComponent = this.getComponent.bind(this);

    this.state = {
      questions : jsonquestions.questions,
      status: false,
      questionNumber: 0,
      answered: false,
      answer : ''
    }
    //const ques = this.state.questions[0];
  }
  
  showMe(){
   this.setState({
    status: true
   })
  }

  onClickHandler (index){
    const currentQuestion = this.state.questions[this.state.questionNumber]
    const {questions,optiona,optionb,optionc,optiond,answerkey} = this.state.questions[this.state.questionNumber];
    const options = [optiona,optionb,optionc,optiond]
    console.log(options[answerkey]);
    if (currentQuestion.answerkey == index) { //true
      this.setState({
        answered: true,
        answer : options[answerkey]        
      })

    } else {

    }

   // this.setState({
   //  answered: true
   // })
  }


  getComponent(index) {
   console.log("hh")
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


        
      </Container>
    );
  }
}

export default App;
