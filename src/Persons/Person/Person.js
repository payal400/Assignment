import React, { Component } from 'react';
import   './Person.css';

//stateful component
class Person extends  Component {
  constructor(props){
    super(props);
    console.log('[Person.js] inside constructor', props);
  }
  componentWillMount(){
    console.log('[Person.js] inside componentWillMount');
  }
  componentDidMount(){
    console.log('[Person.js] inside componentDidMount');
  }


  render() {
    console.log('[Person.js] inside render');
    return (
      <div className="Person"> 
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} year's old!!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed}/>
      </div>
  )
  }
} 

//stateless/functional component
// const person = (props) =>{
//    return (
//        <div className="Person"> 
//          <p onClick={props.click}>I'm {props.name} and I'm {props.age} year's old!!</p>
//          <p>{props.children}</p>
//          <input type="text" onChange={props.changed}/>
//        </div>
//    )
// };

export default person;