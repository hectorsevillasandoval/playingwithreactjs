import React, { Component } from 'react';
import './App.css';
var uuid = require('uuid'),
    firebase = require('firebase');

var config = {
      apiKey: "AIzaSyBTMudtjxQ_djW_m8tWz-pC3un8y3chTuY",
      authDomain: "surveywreact.firebaseapp.com",
      databaseURL: "https://surveywreact.firebaseio.com",
      storageBucket: "surveywreact.appspot.com",
      messagingSenderId: "861398237923"
      };
firebase.initializeApp(config);

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: uuid.v1(),
      name: "",
      answers: {
        q1: "",
        q2: "",
        q3: "",
        q4: ""
      },

      submitted: false
    }


    this.handleQuestionsChange = this.handleQuestionsChange.bind(this);

  }

  handleNameSubmit(event){

    var name = this.refs.name.value;

    this.setState({
      name:name
    }, function(){
      console.log(this.state);
    });

    console.log(this.refs.name.value);
    event.preventDefault();
  }

  handleQuestionSubmit(event){

    firebase.database().ref('surveywreact/' + this.state.id ).set({
      name: this.state.name,
      answers: this.state.answers
    });

    event.preventDefault();

    this.setState({submitted: true});

  }

  handleQuestionsChange(event){
    var answers = this.state.answers;
    console.log(event.target.value);
    if(event.target.name === "q1"){
      answers.q1 = event.target.value;
    }else if(event.target.name === "q2"){
      answers.q2 = event.target.value;
    }else if(event.target.name === "q3"){
      answers.q3 = event.target.value;
    }else if(event.target.name === "q4"){
      answers.q4 = event.target.value;
    }

    this.setState({answers:answers}, function(){
      console.log(this.state);
    });
  }


  render() {

    var user,
        questions;

    if(this.state.name && this.state.submitted === false){

      user = <h2>Welcome {this.state.name}</h2>

      questions = <span>
                  <h3>Survey Questions </h3>
                  <form onSubmit={this.handleQuestionSubmit.bind(this)}>
                  <div>
                    <label htmlFor="q1">What is your favourite operating system?</label><br />
                    <input type="radio" name="q1" value="Windows" onChange={this.handleQuestionsChange.bind(this)} />Windows <br />
                    <input type="radio" name="q1" value="OSX" onChange={this.handleQuestionsChange.bind(this)} />OSX <br />
                    <input type="radio" name="q1" value="Linux" onChange={this.handleQuestionsChange.bind(this)} />Linux <br />
                    <input type="radio" name="q1" value="Solaris" onChange={this.handleQuestionsChange.bind(this)} />Solaris <br />
                    <input type="radio" name="q1" value="Other" onChange={this.handleQuestionsChange.bind(this)} />Other <br />
                  </div>


                  <div>
                    <label htmlFor="q2">What is your favourite editor?</label><br />
                    <input type="radio" name="q2" value="Atom" onChange={this.handleQuestionsChange.bind(this)} />Atom <br />
                    <input type="radio" name="q2" value="Sublime Text" onChange={this.handleQuestionsChange.bind(this)} />Sublime Text <br />
                    <input type="radio" name="q2" value="Brackets" onChange={this.handleQuestionsChange.bind(this)} />Brackets <br />
                    <input type="radio" name="q2" value="Dreamweaver" onChange={this.handleQuestionsChange.bind(this)} />Dreamweaver <br />
                    <input type="radio" name="q2" value="Other" onChange={this.handleQuestionsChange.bind(this)} />Other <br />
                  </div>

                  <div>
                    <label htmlFor="q3">What is your favourite Programing Language?</label><br />
                    <input type="radio" name="q3" value="PHP" onChange={this.handleQuestionsChange.bind(this)} />PHP <br />
                    <input type="radio" name="q3" value="Ruby" onChange={this.handleQuestionsChange.bind(this)} />Ruby <br />
                    <input type="radio" name="q3" value="C Sharp" onChange={this.handleQuestionsChange.bind(this)} />C Sharp <br />
                    <input type="radio" name="q3" value="Python" onChange={this.handleQuestionsChange.bind(this)} />Python <br />
                    <input type="radio" name="q3" value="Other" onChange={this.handleQuestionsChange.bind(this)} />Other <br />
                  </div>

                  <div>
                    <label htmlFor="q4">What is your favourite Browser?</label><br />
                    <input type="radio" name="q4" value="Chrome" onChange={this.handleQuestionsChange.bind(this)} />Chrome <br />
                    <input type="radio" name="q4" value="Mozilla" onChange={this.handleQuestionsChange.bind(this)} />Mozilla <br />
                    <input type="radio" name="q4" value="Internet Explorer" onChange={this.handleQuestionsChange.bind(this)} />Internet Explorer <br />

                    <input type="radio" name="q4" value="Other" onChange={this.handleQuestionsChange.bind(this)} />Other <br />
                  </div>

                  <input type="submit" value="Submit" />

                  </form>
                </span>;

    }else if(!this.state.name && this.state.submitted === false){
      user = <span>
              <h2>Please enter your name to begin the survey</h2>
              <form onSubmit={this.handleNameSubmit.bind(this)}>
                <input type="text" placeholder="Enter name..." ref="name" />
              </form>
            </span>;
      questions = "";
    }else if( this.state.submitted === true){
          user = <h2>Thank you {this.state.name}</h2>
    }

    return (
      <div className="App">
        <div className="App-header">

          <h2>Simple Survey</h2>

        </div>

        <div>
          {user}
        </div>

        <div className="container">
          {questions}

        </div>

      </div>
    );
  }
}

export default App;
