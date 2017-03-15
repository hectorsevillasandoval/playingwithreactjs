import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    }
  }

  getResumeData(){
    $.ajax({
      url: 'http://localhost:3000/resumeData.json',
      dataType: 'json',
      success: function(data){
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }


  render() {

    console.log(this.state.resumeData);

    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
